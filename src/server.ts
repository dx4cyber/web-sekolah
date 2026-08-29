import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (
    request: Request,
    env: unknown,
    ctx: unknown,
  ) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }

  return serverEntryPromise;
}

async function normalizeCatastrophicSsrResponse(
  request: Request,
  response: Response,
): Promise<Response> {
  // Jangan ubah response API menjadi HTML.
  // Biarkan /api/ppdb, /api/partnership, dll mengembalikan response aslinya.
  const pathname = new URL(request.url).pathname;

  if (pathname.startsWith("/api/")) {
    return response;
  }

  if (response.status < 500) {
    return response;
  }

  const contentType = response.headers.get("content-type") ?? "";

  if (!contentType.includes("application/json")) {
    return response;
  }

  const body = await response.clone().text();

  if (!isH3SwallowedErrorBody(body)) {
    return response;
  }

  console.error(new Error(`h3 swallowed SSR error: ${body}`));

  return new Response(renderErrorPage(), {
    status: 500,
    headers: {
      "content-type": "text/html; charset=utf-8",
    },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as {
      unhandled?: unknown;
      message?: unknown;
    };

    return (
      payload.unhandled === true &&
      payload.message === "HTTPError"
    );
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const handler = await getServerEntry();

      const response = await handler.fetch(
        request,
        env,
        ctx,
      );

      return await normalizeCatastrophicSsrResponse(
        request,
        response,
      );
    } catch (error) {
      console.error("SERVER ERROR:", error);

      // API harus tetap mendapatkan JSON
      const pathname = new URL(request.url).pathname;

      if (pathname.startsWith("/api/")) {
        return Response.json(
          {
            success: false,
            message: "Terjadi kesalahan pada server.",
          },
          {
            status: 500,
          },
        );
      }

      return new Response(renderErrorPage(), {
        status: 500,
        headers: {
          "content-type": "text/html; charset=utf-8",
        },
      });
    }
  },
};
import { createFileRoute } from "@tanstack/react-router";
import { mkdir, rm, writeFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import { join } from "node:path";
import { getDb } from "../../lib/db.server";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ALLOWED_FILES: Record<string, string> = {
  "application/pdf": ".pdf",
  "image/jpeg": ".jpg",
  "image/png": ".png",
};

export const Route = createFileRoute("/api/ppdb")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let savedFile: string | null = null;

        try {
          const form = await request.formData();

          const name = String(form.get("name") ?? "").trim();
          const nisn = String(form.get("nisn") ?? "").trim();
          const school = String(form.get("school") ?? "").trim();
          const major = String(form.get("major") ?? "").trim();
          const whatsapp = String(form.get("whatsapp") ?? "").trim();
          const email = String(form.get("email") ?? "").trim();

          const report = form.get("report");

          if (
            !name ||
            !nisn ||
            !school ||
            !major ||
            !whatsapp ||
            !email
          ) {
            return Response.json(
              { message: "Semua data wajib diisi." },
              { status: 400 },
            );
          }

          if (!/^\d{10}$/.test(nisn)) {
            return Response.json(
              { message: "NISN harus terdiri dari 10 digit." },
              { status: 400 },
            );
          }

          if (
            !report ||
            typeof report === "string" ||
            report.size === 0
          ) {
            return Response.json(
              { message: "Berkas rapor wajib diunggah." },
              { status: 400 },
            );
          }

          if (report.size > MAX_FILE_SIZE) {
            return Response.json(
              { message: "Ukuran berkas maksimal 5 MB." },
              { status: 400 },
            );
          }

          const extension = ALLOWED_FILES[report.type];

          if (!extension) {
            return Response.json(
              { message: "Berkas harus PDF, JPG, atau PNG." },
              { status: 400 },
            );
          }

          const filename = `${randomUUID()}${extension}`;
          const uploadDir = "/app/uploads/ppdb";

          await mkdir(uploadDir, { recursive: true });

          savedFile = join(uploadDir, filename);

          await writeFile(
            savedFile,
            Buffer.from(await report.arrayBuffer()),
          );

          const sql = getDb();

          const [registration] = await sql`
            INSERT INTO ppdb_registrations (
              name,
              nisn,
              school,
              major,
              whatsapp,
              email,
              report_file
            )
            VALUES (
              ${name},
              ${nisn},
              ${school},
              ${major},
              ${whatsapp},
              ${email},
              ${filename}
            )
            RETURNING id
          `;

          return Response.json(
            {
              success: true,
              id: registration.id,
            },
            { status: 201 },
          );
        } catch (error: any) {
          if (savedFile) {
            await rm(savedFile, { force: true }).catch(() => {});
          }

          // PostgreSQL unique violation, misalnya NISN sudah pernah daftar
          if (error?.code === "23505") {
            return Response.json(
              { message: "NISN tersebut sudah terdaftar." },
              { status: 409 },
            );
          }

          console.error("PPDB ERROR:", error);

          return Response.json(
            { message: "Data pendaftaran gagal disimpan." },
            { status: 500 },
          );
        }
      },
    },
  },
});
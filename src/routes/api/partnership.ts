import { createFileRoute } from "@tanstack/react-router";
import { getDb } from "../../lib/db.server";

export const Route = createFileRoute("/api/partnership")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const form = await request.formData();

          const company = String(form.get("company") ?? "").trim();
          const pic = String(form.get("pic") ?? "").trim();
          const email = String(form.get("email") ?? "").trim();
          const phone = String(form.get("phone") ?? "").trim();
          const needs = String(form.get("needs") ?? "").trim();

          if (!company || !pic || !email || !phone || !needs) {
            return Response.json(
              { message: "Semua data wajib diisi." },
              { status: 400 },
            );
          }

          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return Response.json(
              { message: "Format email tidak valid." },
              { status: 400 },
            );
          }

          const sql = getDb();

          const [result] = await sql`
            INSERT INTO partnership_requests (
              company,
              pic,
              email,
              phone,
              needs
            )
            VALUES (
              ${company},
              ${pic},
              ${email},
              ${phone},
              ${needs}
            )
            RETURNING id
          `;

          return Response.json(
            {
              success: true,
              id: result.id,
            },
            { status: 201 },
          );
        } catch (error) {
          console.error("PARTNERSHIP ERROR:", error);

          return Response.json(
            { message: "Pengajuan kemitraan gagal disimpan." },
            { status: 500 },
          );
        }
      },
    },
  },
});
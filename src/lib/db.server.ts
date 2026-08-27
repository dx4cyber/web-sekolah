import postgres from "postgres";

let client: ReturnType<typeof postgres> | undefined;

export function getDb() {
  if (client) return client;

  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL belum dikonfigurasi");
  }

  client = postgres(databaseUrl, {
    max: 5,
    idle_timeout: 20,
    connect_timeout: 10,
  });

  return client;
}
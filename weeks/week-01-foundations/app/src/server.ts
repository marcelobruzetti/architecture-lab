import Fastify from "fastify";
import { pool } from "./db.js";

const app = Fastify({ logger: true });

app.get("/health", async () => {
  const result = await pool.query("SELECT 1 AS healthy");

  return {
    status: "ok",
    database: result.rows[0].healthy === 1,
  };
});

type CreateUrlBody = {
  originalUrl: string;
};

app.post<{ Body: CreateUrlBody }>("/urls", async (request, reply) => {
  const { originalUrl } = request.body;

  // TODO: validar URL
  // TODO: gerar short_code
  // TODO: persistir no PostgreSQL

  return reply.code(201).send({
    originalUrl,
  });
});

async function main() {
  await app.listen({ port: 3000, host: "127.0.0.1" });
}

main().catch((error) => {
  app.log.error(error);
  process.exit(1);
});
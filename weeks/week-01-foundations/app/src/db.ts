import { Pool } from "pg";

export const pool = new Pool({
  host: "localhost",
  port: 5435,
  user: "lab",
  password: "lab_password",
  database: "url_shortener",
  max: 10,
  connectionTimeoutMillis: 2000,
});
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getDb } from "./client.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SCHEMA_PATH = path.resolve(__dirname, "../../db/schema.sql");

export function initDb(): void {
  const schema = fs.readFileSync(SCHEMA_PATH, "utf-8");
  const db = getDb();
  db.exec(schema);
}

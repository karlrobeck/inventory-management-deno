import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import * as schema from "./schema";

const sqlite = new Database(Bun.env.DATABASE_URL);

export const db = drizzle({ client: sqlite, schema });

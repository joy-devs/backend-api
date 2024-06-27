import "dotenv/config";
import {neon} from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema"

const databaseUrl =neon(process.env.DATABASE_URL as string)

const db = drizzle(databaseUrl,{schema,logger:true})


export default db;
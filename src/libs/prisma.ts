import { PrismaClient as detail_sql } from "../../prisma";


export const dbData = new detail_sql({
    datasources: {
        db: {
            url: process.env.DATABASE_URL,
        },
    },
});

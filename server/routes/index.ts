import { H3Event } from 'h3';

export default defineEventHandler(async (event: H3Event) => {
    const db = useDatabase();

    const { rows } = await db.sql`SELECT * FROM products`;

    return rows;
})

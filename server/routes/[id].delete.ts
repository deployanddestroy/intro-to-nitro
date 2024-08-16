import { H3Event } from 'h3';

export default defineEventHandler(async (event: H3Event) => {
    const id = getRouterParam(event, 'id');

    if (id) {
        const db = useDatabase();
        await db.sql`DELETE FROM products WHERE id = ${id}`;
        return 'Product deleted';
    }

    setResponseStatus(event, 404);
    return 'Not found';
})
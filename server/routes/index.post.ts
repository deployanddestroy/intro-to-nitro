import { H3Event } from 'h3';

export default defineEventHandler(async (event: H3Event) => {
    const body = await readBody(event);

    // checks here...

    if (body) {
        const db = useDatabase();
        await db.sql`INSERT INTO products(title, description, price, active) VALUES (${body.title}, ${body.description}, ${body.price}, ${body.active})`;
        setResponseStatus(event, 201);
        return 'Product created';
    }

    setResponseStatus(event, 400);
    return 'Invalid body';
})
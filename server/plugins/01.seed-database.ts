export default defineNitroPlugin(async (nitroApp) => {
    const db = useDatabase();

    try {
        await db.sql`CREATE TABLE IF NOT EXISTS products 
            ("id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
            "title" TEXT, 
            "description" TEXT, 
            "price" DECIMAL(12, 2), 
            "active" BOOLEAN)`;
    } catch (ex) {
        console.error(ex);
    }
})
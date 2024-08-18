export default defineTask({
    meta: {
        name: 'aggregate:products',
        description: 'Aggregate products metadata'
    },
    async run({ payload, context }) {
        const db = useDatabase();
        const { rows } = await db.sql`SELECT products.price FROM products`;

        const productPriceTotal: number = rows
            .map((r: any) => parseFloat(r.price))
            .reduce((a: number, b: number) => a + b);

        await useStorage('aggregates')
            .setItem('products',
                {
                    averagePrice: productPriceTotal / rows.length,
                    totalProducts: rows.length
                });

        return { result: 'success' }
    }
})
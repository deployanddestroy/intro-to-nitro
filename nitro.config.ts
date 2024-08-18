//https://nitro.unjs.io/config
export default defineNitroConfig({
    srcDir: "server",
    experimental: {
        database: true,
        tasks: true
    },
    devDatabase: {
        default: {
            connector: 'postgresql',
            options: {
                url: 'postgresql://postgres:password@localhost:5432/postgres'
            }
        }
    },
    database: {
        default: {
            connector: 'postgresql',
            options: {
                url: 'postgresql://postgres:{yourpasswordhere}@postgres.railway.internal:5432/railway'
            }
        }
    },
    scheduledTasks: {
        '* * * * *': ['aggregate:products']
    }
});

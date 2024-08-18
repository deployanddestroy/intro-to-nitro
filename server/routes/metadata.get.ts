import { H3Event } from 'h3';

export default defineEventHandler((event: H3Event) => {
    const storage = useStorage('aggregates');
    const productMetadata = storage.getItem('products');
    if (!productMetadata) {
        setResponseStatus(event, 404);
        return 'Not found';
    }
    return productMetadata;
})
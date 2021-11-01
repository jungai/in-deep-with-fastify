import { fastify } from 'core_app';

test('notfound path', async () => {
    const response = await fastify.inject().get('/api/v1/not/exist');

    const { statusCode } = response;

    expect(statusCode).toBe(404);
});

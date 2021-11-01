import { fastify } from 'core_app';

test('id is required', async () => {
    const response = await fastify.inject().get('/api/v1/users/junior');

    const { statusCode } = response;
    const body = response.json();

    expect(statusCode).toBe(400);
    expect(body.message).toMatch(/params.id/);
});

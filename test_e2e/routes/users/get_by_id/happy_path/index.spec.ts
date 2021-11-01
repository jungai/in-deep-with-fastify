import { fastify } from 'core_app';

test('id is required', async () => {
    const id = 1;
    const response = await fastify.inject().get(`/api/v1/users/${id}`);

    const { statusCode } = response;
    const body = response.json();
    console.log('body', body);

    expect(statusCode).toBe(200);
    expect(body.result).toMatch(`id is ${id}`);
});

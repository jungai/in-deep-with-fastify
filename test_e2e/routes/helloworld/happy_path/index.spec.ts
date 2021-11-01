import { fastify } from 'core_app';

describe('helloworld route', () => {
    test('happy path', async () => {
        // obj style
        // const response = await fastify.inject({
        //     method: 'GET',
        //     url: '/api/v1/helloworld',
        // });

        // chained
        const response = await fastify.inject().get('/api/v1/helloworld');

        const { statusCode } = response;
        const body = response.json();

        expect(statusCode).toBe(200);
        expect(body.msg).toBe('hello world v1 api');
    });
});

import Fastify from 'fastify';

export const fastify = Fastify({
    logger: {
        prettyPrint: true,
        serializers: {
            req(request) {
                return {
                    requestId: request.id,
                    method: request.method,
                    url: request.url,
                    parameters: request.params,
                };
            },
            // res use default default
        },
    },
});

// Declare a route
fastify.get('/', function (_request, reply) {
    // console.log(`req -> ${request?.user as any}`);
    // throw new Error('eiei');
    reply.send({ hello: 'world' });
});

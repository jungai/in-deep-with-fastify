import Fastify from 'fastify';

export const fastify = Fastify({
    logger: true,
});

// Declare a route
fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' });
});

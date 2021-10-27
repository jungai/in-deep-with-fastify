import Fastify from 'fastify';
import cors from 'fastify-cors';
import rateLimit from 'fastify-rate-limit';
import helmet from 'fastify-helmet';

export const fastify = Fastify({
    logger: {
        prettyPrint: true,
        serializers: {
            req(request) {
                return {
                    method: request.method,
                    url: request.url,
                    parameters: request.params,
                };
            },
            // res use default default
        },
    },
});

// share plugin
fastify.register(helmet);
fastify.register(cors);
fastify.register(rateLimit, {
    max: 5,
    timeWindow: '1 minute',
});

// route with plugin
fastify.register(
    function (fastify, _opts, done) {
        fastify.get('/', function (_request, reply) {
            reply.send({ msg: 'hello world v1 api' });
        });

        done();
    },
    { prefix: '/api/v1' },
);

fastify.register(
    function (fastify, _opts, done) {
        fastify.get('/', function (_request, reply) {
            reply.send({ msg: 'hello world v2 api' });
        });

        done();
    },
    { prefix: '/api/v2' },
);

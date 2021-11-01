import Fastify, { FastifyInstance } from 'fastify';
import cors from 'fastify-cors';
import rateLimit from 'fastify-rate-limit';
import helmet from 'fastify-helmet';

import { Server, IncomingMessage, ServerResponse } from 'http';
import { questions } from './controllers/questions';

export type IFastifyApp = FastifyInstance<Server, IncomingMessage, ServerResponse>;

export const fastify: IFastifyApp = Fastify({
    logger: {
        prettyPrint: true,
        serializers: {
            req(request) {
                return {
                    method: request.method,
                    url: request.url,
                    parameters: request.params,
                    queries: request.query,
                };
            },
            // res use default default
        },
    },
});

fastify.register(helmet);
fastify.register(cors);
fastify.register(rateLimit, {
    max: 5,
    timeWindow: '1 minute',
});

// route with plugin
fastify.register(
    function (instance, _opts, done) {
        // share plugin
        instance.addHook('onRequest', (req, reply, done) => {
            console.log('req', req.method);

            done();
        });

        // instance.addSchema()

        // instance.addHook('onRequest', (req, reply, done) => {
        //     console.log(req.method);
        //     done();
        // });

        instance.get('/helloworld', function (_request, reply) {
            // reply.send({ msg: 'hello world v1 api' });
            const a = () => {
                throw new Error('asdasd');
            };

            try {
                a();
                console.log('lol');
            } catch (error) {
                reply.send({ error: 'junior error' });
            }
        });

        questions(instance);

        done();
    },
    { prefix: '/api/v1' },
);

fastify.register(
    function (fastify, _opts, done) {
        fastify.get('/', function (_request, reply) {
            reply.send({ msg: 'hello world v2 api' });
            // throw new Error('Custom err');
        });

        done();
    },
    { prefix: '/api/v2' },
);

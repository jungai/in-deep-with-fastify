import { RequestBodyDefault, RequestHeadersDefault, RequestParamsDefault, RouteShorthandOptions } from 'fastify';
import { IFastifyApp } from '../../app';
// import S from 'fluent-json-schema';

interface IQuestionsQueries {
    qId?: string;
}

// // Define our route options with schema validation
const opts: RouteShorthandOptions = {
    schema: {
        querystring: {
            type: 'object',
            properties: {
                qId: {
                    type: 'integer',
                },
            },
        },
    },
};

// { schema: { querystring: queryStringJsonSchema }
// const queryStringJsonSchema = S.object().prop('qId', S.integer());

export function questions(app: IFastifyApp) {
    return app.get<{
        Body?: RequestBodyDefault;
        Querystring: IQuestionsQueries;
        Params?: RequestParamsDefault;
        Headers?: RequestHeadersDefault;
    }>('/questions', opts, async (req, reply) => {
        reply.send({ msg: 'questions' });
    });
}

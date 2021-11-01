# Poc Fastify

## Doc

**Good**

- clear (api, guide) 👍
- example 👍

**Bad**

- priority 😕

## Content-Type

fastify support `application/json` and `text/plain` but we can add it by `addContentTypeParser`

refs

- https://www.fastify.io/docs/latest/ContentTypeParser/

## Encapsulation

is a fundamental feature of fastify -> `encapsulation context`, it control ` decorators`, `hooks`, `plugin`, `route`

**refs**

- [click](https://www.fastify.io/docs/latest/Encapsulation/)

## Decorators

decorators API allows customization of the core Fastify objects e.g. `server instance` , `any request`, `reply objects`

this might be useful for what we do in `express` such as `Reflect req`

## Plugins

- extends and reuse custom functionalities

- plugin can be whatever e.g. `routes`, `decorators`

## Middleware

- fastify(3.x) not support middleware by default
- not recommended to use this

## Logger

- like morgan but better with `pino`

## Error

- fastify tries to catch as many uncaught errors as it can without hindering performance

```js
app.get("/", () => {
  throw new Error("error");
}); // -> catch and if `throw new Error` default is status 500, internal error
```

also can write a custom hook for catch error

## Hooks

- fast allow user to eject each hook starting incoming request e.g. `onRequest`

## Schema Validation

- Fastify uses a schema-based approach

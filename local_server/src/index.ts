import 'dotenv/config';
import { fastify } from 'core_app';

const port = process.env.PORT || 4000;

// Run the server!
fastify.listen(port, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    // Server is now listening on ${address}
    console.log(`Server is start on port ${address}`);
});

import Fastify from "fastify";
import router from "./router";

import swagger from "./plugins/swagger";
import validator from "./plugins/validator";
import prisma from "./plugins/prisma";
import publicFIles from "./plugins/publicFIles";

const fastify = Fastify({ logger: true });

// Root route handler
fastify.get('/', async (_request, _reply) => {
  return { message: 'Identity Reconciliation API is running. Visit /documentation for API docs.' };
});

// plugins
fastify.register(swagger);
fastify.register(validator);
fastify.register(prisma)
fastify.register(publicFIles)
fastify.register(router);

export default fastify;

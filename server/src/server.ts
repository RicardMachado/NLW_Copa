import Fastify from "fastify";

async function bootstarp() {
    const fastify = Fastify({
        logger: true,
    })

    fastify.get('/pools/count', () => {
        return { count: 10 }
    })

    await fastify.listen({ port: 3333 })
}

bootstarp()
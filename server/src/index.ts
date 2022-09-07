import { apolloServer } from './lib/apolloServer'

// TODO: We should pass the port in a config file.
const PORT: string = process.env.PORT || '9000'

apolloServer
  .listen({ port: PORT })
  .then(({ url }) => console.log(`🚀  Server ready at ${url}`))
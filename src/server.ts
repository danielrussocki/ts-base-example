import dotenv from 'dotenv'
/* express */
import express, { Express } from 'express'
/* apollo server */
import { ApolloServer } from 'apollo-server-express'
/* graphql */
import { makeExecutableSchema } from '@graphql-tools/schema'

dotenv.config()

export class TSApplication {
  app: Express = express()

  async initApplication(typeDefs: any, resolvers: any) {
    const schema = makeExecutableSchema({ typeDefs, resolvers })
    const server = new ApolloServer({
      schema,
      csrfPrevention: true
    })

    await server.start()

    this.app.set('port', process.env.PORT || 3000)
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
    this.app.listen(this.app.get('port'), () => console.log(`app running on port ${this.app.get('port')}`))
  }
}

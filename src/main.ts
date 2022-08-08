import 'reflect-metadata'
import 'module-alias/register'
/* server */
import { TSApplication } from './server'
/* resolvers */
// import { modules } from './modules'
import { typeDefs } from './modules/user/user.type-defs'
import { resolvers } from './modules/user/user.resolver'

const application = new TSApplication()

application.initApplication(typeDefs, resolvers).catch((e) => console.error(e))

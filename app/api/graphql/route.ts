import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { PrismaClient } from '@prisma/client'
import typeDefs from '@/graphql/schemas'
import resolvers from '@/graphql/resolvers'

const prisma = new PrismaClient()

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = startServerAndCreateNextHandler(server, {
  context: async () => ({ prisma })
})

export { handler as GET, handler as POST }
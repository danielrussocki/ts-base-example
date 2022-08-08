import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  #types
  type AppResponse {
    error: String
    message: String
    statusCode: Int
    response: String
  }
  # Queries
  type Query {
    authenticationLogin(email: String!, password: String!): AppResponse
  }

  # Mutations
  type Mutation {
    authenticationRegister(email: String!, password: String!): AppResponse
  }
`

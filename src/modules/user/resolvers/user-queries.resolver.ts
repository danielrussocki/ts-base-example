import { QueryService } from './services/query.service'
/* handlers */
import { successResponse, errorResponse } from '@app/handlers/response.handler'

class QueryResolver extends QueryService {
  async authenticationLoginResolver(email: string, password: string): Promise<Object> {
    try {
      const data = await this.authenticationLogin({ email, password })
      return successResponse(JSON.stringify(data))
    } catch (error) {
      return errorResponse(error)
    }
  }
}

export const queryResolver = new QueryResolver()

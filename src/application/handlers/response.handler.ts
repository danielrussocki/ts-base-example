export function successResponse(response: string) {
  return {
    statusCode: 200,
    message: 'success',
    response
  }
}

export function errorResponse(error: unknown) {
  return {
    statusCode: 500,
    message: String(error)
  }
}

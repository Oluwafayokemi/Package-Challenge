class ApiError extends Error {
  constructor (public statusCode?: number, message?: string) {
    super(message)
    this.statusCode = statusCode
  }
}
export default ApiError

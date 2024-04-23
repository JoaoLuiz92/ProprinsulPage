import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class AuthController {
  async login({ request, auth, response }: HttpContext) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      // Verifique as credenciais do usuário.
      const user = await User.query().where('email', email).firstOrFail()
      if (!(await Hash.verify(user.password, password))) {
        return response.badRequest('Invalid credentials')
      }

      // Gere um token JWT ou sessão, conforme configurado.
      const token = await auth.use('api').generate(user)

      return response.ok({ message: 'Logged in successfully', token })
    } catch (error) {
      return response.badRequest('Invalid credentials')
    }
  }
}

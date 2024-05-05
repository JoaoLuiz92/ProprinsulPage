import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/User'
import hash from '@adonisjs/core/services/hash'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const user = await User.all()
    return user
  }

  async store({ request }: HttpContext) {
    const body = request.only(['email', 'password', 'profile', 'company_id'])
    const user = await User.create({
      email: body.email,
      password: body.password,
      profile: body.profile,
      company_id: body.company_id,
    })
    const passHash = await hash.make(body.password)
    user.password = passHash

    return user
  }

  async show({ response, params }: HttpContext) {
    try {
      const user = await User.query()
        .where('id', params.id) // ou algum outro critério de identificação
        .firstOrFail()

      return response.json(user)
    } catch (error) {
      return response.status(404).json({ message: 'User not found', error })
    }
  }

  async update({ request }: HttpContext) {
    const userId = request.param('id')
    const body = request.only(['email', 'password', 'profile'])
    const user = await User.findOrFail(userId)
    await user.merge(body).save()
    return user
  }

  async destroy({ request }: HttpContext) {
    const userId = request.param('id')
    const user = await User.findOrFail(userId)
    await user.delete()
  }
}

import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/User'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const user = await User.all()
    return user
  }

  async store({ request }: HttpContext) {
    const body = request.only(['full_name', 'email', 'password'])
    const user = await User.create({
      full_name: body.full_name,
      email: body.email,
      password: body.password,
    })

    return user
  }
  
  async show({ request }: HttpContext) {
    const userId = request.param('id')
    const user = await User.findOrFail(userId)
    return user
  }
  
  async update({ request }: HttpContext) {
    const userId = request.param('id')
    const body = request.only(['full_name', 'email', 'password'])
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
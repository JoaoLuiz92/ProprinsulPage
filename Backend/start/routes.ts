import router from '@adonisjs/core/services/router'
import User from '#models/User'
import hash from '@adonisjs/core/services/hash'
import { error } from 'node:console'

const UsersController = () => import('#controllers/users_controller')
const SessionController = () => import('#controllers/session_controller')

router.get('/', async () => {})

router.post('User/:id/tokens', async ({ params }) => {
  const user = await User.findOrFail(params.id)
  const token = await User.accessTokens.create(user)

  return {
    type: 'bearer',
    value: token.value!.release(),
  }
})

router.post('login', async ({ request, response }) => {
  const { email, password } = request.only(['email', 'password'])

  // Attempt to find the user by email
  const user = await User.findBy('email', email)
  if (!user) {
    return response.abort('Invalid credentials')
  }

  // Verify the password
  const passwordValid = await hash.verify(user.password, password)
  if (!passwordValid) {
    return response.abort('Invalid credentials')
  }

  // Assuming you want to generate a token or perform some other actions after successful authentication
  // For example, let's assume you're using AdonisJS's built-in authentication to generate a token:
  try {
    const token = await auth.use('api').generate(user)
    return response.json(token)
  } catch (err) {
    console.error(err)
    return response.internalServerError('Something went wrong')
  }
})

router.resource('User', UsersController)

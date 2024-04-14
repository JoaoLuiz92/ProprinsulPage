import router from '@adonisjs/core/services/router'
import User from '#models/User'
import hash from '@adonisjs/core/services/hash'
import { error } from 'node:console'

const UsersController = () => import('#controllers/users_controller')

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
  const email = request.input('email')
  const password = request.input('password')

  try {
    // Find user based on email
    const user = await User.findOrFail(email)

    // Check if the password is correct
    if (await hash.verify(user.password, password)) {
      const token = await User.accessTokens.create(user)
      return {
        type: 'bearer',
        value: token.value!.release(),
      }
    } else {
      console.error('Password mismatch for user:', email)
      // Log the failed attempt here if necessary, ensure security of logs.
      return response.unauthorized('Invalid ') // Generic error message
    }
  } catch (e) {
    // It's good to log the specific error
    console.error('Authentication error:', e.message)
    return response.unauthorized('Invalid credentials')
  }
})

router.resource('User', UsersController)

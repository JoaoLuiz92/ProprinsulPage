import router from '@adonisjs/core/services/router'
import User from '#models/User'

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

router.get('dashboard', async ({ request, auth, response }) => {
  const { email, password } = request.all()

  try {
    const user = await User.findBy('email', email)

    if (!user) {
      return response.status(401).send({ error: 'Credenciais inválidas' })
    }

    const passwordValid = await Hash.verify(password, user.password)

    if (!passwordValid) {
      return response.status(401).send({ error: 'Credenciais inválidas' })
    }

    const token = await auth.use('api').authenticate()

    return response.status(200).send({ token })
  } catch (error) {
    return response.status(500).send({ error: 'Erro interno do servidor' })
  }
})

router.resource('User', UsersController)

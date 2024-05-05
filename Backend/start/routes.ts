import router from '@adonisjs/core/services/router'
import User from '#models/User'
import hash from '@adonisjs/core/services/hash'
const CompaniesController = () => import('#controllers/companies_controller')

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
  const { email, password } = request.only(['email', 'password'])

  const user = await User.findBy('email', email)
  if (!user) {
    return response.abort('Invalid')
  }

  const passwordValid = await hash.verify(user.password, password)

  if (passwordValid) {
    const token = await User.accessTokens.create(user)
    const data = response.json
    console.log(data)
    // return response.json({
    return response.json({
      type: 'bearer',
      value: token.value!.release(),
    })
  } else {
    return response.abort('Invalid credentials')
  }
})

router.resource('User', UsersController)
router.resource('company', CompaniesController)

import JwtGuard, { JwtGuardOptions } from 'path/to/JwtGuard' // Replace 'path/to' with the actual path to your JwtGuard file
import UserProvider from 'path/to/UserProvider' // Import your user provider class
import { HttpContext } from '@adonisjs/core/build/standalone'

// Initialize JwtGuard with user provider and options
const jwtGuard = new JwtGuard<UserProvider>({
  userProvider: new UserProvider(), // Instantiate your user provider
  options: {
    secret: 'your-secret-key-here' // Provide your secret key here
  }
})

// Somewhere in your controller or service method
async function generateToken(ctx: HttpContext) {
  const user = ctx.auth.user // Get the user from the HTTP context (assuming you have authentication middleware configured)

  try {
    const token = await jwtGuard.generate(user)
    return token // Return the generated token
  } catch (error) {
    // Handle error
    console.error('Error generating token:', error)
    return null
  }
}

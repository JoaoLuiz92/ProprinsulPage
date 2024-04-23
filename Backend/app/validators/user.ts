import { Rules } from '@vinejs/vine'
import vine from '@vinejs/vine'

export default {
  async loginValidator(data: any) {
    const validator = vine.object({
      email: vine.string({}, [vine.rules.email(), vine.rules.required()]),
      password: vine.string({}, [vine.rules.minLength(6), vine.rules.required()]),
    })

    return await validator.validate(data)
  },
}

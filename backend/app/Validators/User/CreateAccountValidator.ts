import { schema, validator, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Account from 'App/Models/User/Account'

export default class CreateAccountValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public reporter = validator.reporters.api

  public schema = schema.create({
    username: schema.string({}, [
      rules.maxLength(100),
      rules.unique({
        table: Account.table,
        column: 'username',
        where: {deleted_at: null}
      })
    ]),
    password: schema.string([
      rules.minLength(8),
    ]),
    email: schema.string({}, [
      rules.maxLength(255),
      rules.email(),
      rules.unique({
        column: 'email',
        table: Account.table,
        where: {deleted_at: null}
      })
    ]),
    google_id: schema.string.optional({}, [
      rules.maxLength(255)
    ]),
    fullname: schema.string({}, [
      rules.maxLength(100)
    ]),
    avatar: schema.file.optional({
      size: '2mb',
      extnames: ['jpg', 'png', 'jpeg']
    }),
    is_ban: schema.boolean.optional(),
    no_handphone: schema.string.optional({}, [
      rules.maxLength(20)
    ]),
    gender: schema.enum(['L', 'P']),
  })
}

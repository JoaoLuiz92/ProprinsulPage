import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'companies'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').unsigned()
      table.string('company_name', 45)
      table.string('cnpj', 45).unique()
      table.string('email', 45).unique()
      table.string('adress', 45)
      table.string('city', 45)
      table.string('fone', 45)

      table.timestamps(true, true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

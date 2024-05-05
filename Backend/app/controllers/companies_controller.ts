import type { HttpContext } from '@adonisjs/core/http'
import Company from '#models/company'

export default class CompaniesController {
  async index({ response }: HttpContext) {
    const companies = await Company.all()
    return response.json(companies)
  }

  /**
   * Create/save a new company.
   */
  async store({ request, response }: HttpContext) {
    const data = request.only(['company_name', 'cnpj', 'email', 'adress', 'city', 'fone'])
    const company = await Company.create(data)
    return response.status(201).json(company)
  }

  /**
   * Display a single company.
   */
  async show({ params, response }: HttpContext) {
    try {
      const company = await Company.query()
        .where('id', params.id)
        .preload('user') // Carrega a informação do usuário associado
        .firstOrFail()

      return response.json(company)
    } catch (error) {
      return response.status(404).json({ message: 'Company not found', error })
    }
  }

  /**
   * Update company details.
   */
  async update({ params, request, response }: HttpContext) {
    const company = await Company.findOrFail(params.id)
    const data = request.only(['company_name', 'cnpj', 'email', 'adress', 'city', 'fone'])
    company.merge(data)
    await company.save()
    return response.json(company)
  }

  /**
   * Delete a company with id.
   */
  async destroy({ params, response }: HttpContext) {
    const company = await Company.findOrFail(params.id)
    await company.delete()
    return response.status(204).send('deleted')
  }
}

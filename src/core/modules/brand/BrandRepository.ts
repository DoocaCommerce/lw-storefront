import { client } from '../../services/GraphqlService'
import { OptionsGet } from '../../types/FetchTypes'
import { Brand } from './BrandTypes'

const schemaDefault = ['id', 'name', 'slug']

export async function getBrands(options?: OptionsGet): Promise<Brand[]> {
  const fieldsQuery = options?.fields || schemaDefault
  const brandsQuery = `
    query {
      brands {
        ${fieldsQuery.join()}
      }
    }
  `

  const { brands } = await client.query(brandsQuery)
  return brands
}

export async function getBrandByID(id: number, options?: OptionsGet): Promise<Brand> {
  const fieldsQuery = options?.fields || schemaDefault
  const brandQuery = `
    query ($id: ID!) {
      brand(id: $id) {
        ${fieldsQuery.join()}
      }
    }
  `

  const { brand } = await client.query(brandQuery, { id })
  return brand
}

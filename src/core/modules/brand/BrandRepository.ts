import { gql, query } from '../../services/GraphqlService'
import { OptionsGet } from '../../../common/types/FetchTypes'
import { Brand } from './BrandTypes'

const schemaDefault = ['id', 'name', 'slug']

export async function getBrands(options?: OptionsGet): Promise<Brand[]> {
  const fieldsQuery = options?.fields || schemaDefault
  const brandsQuery = gql`
    query {
      brands {
        ${fieldsQuery.join()}
      }
    }
  `

  const { brands } = await query(brandsQuery)
  return brands
}

export async function getBrandByID(id: number, options?: OptionsGet): Promise<Brand> {
  const fieldsQuery = options?.fields || schemaDefault
  const brandQuery = gql`
    query ($id: ID!) {
      brand(id: $id) {
        ${fieldsQuery.join()}
      }
    }
  `

  const { brand } = await query(brandQuery, { id })
  return brand
}

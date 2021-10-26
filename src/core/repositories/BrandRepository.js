import { gql, query } from '../services/GraphqlService'

const schemaDefault = ['id', 'name', 'slug']

export async function getBrands(options) {
  const fieldsQuery = options?.fields || schemaDefault
  const brandsQuery = gql`
    query {
      brands {
        ${fieldsQuery}
      }
    }
  `

  const { brands } = await query(brandsQuery)
  return brands
}

export async function getBrandByID(id, options) {
  const fieldsQuery = options?.fields || schemaDefault
  const brandQuery = gql`
    query ($id: ID!) {
      brand(id: $id) {
        ${fieldsQuery}
      }
    }
  `

  const { brand } = await query(brandQuery, { id })
  return brand
}

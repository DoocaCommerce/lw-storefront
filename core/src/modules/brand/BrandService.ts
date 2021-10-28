import { getBrandByID, getBrands } from './BrandRepository'
import { Brand } from './BrandTypes'

async function get(): Promise<Brand[]> {
  const result = await getBrands()
  return result
}

async function getById(id: number): Promise<Brand> {
  const result = await getBrandByID(id)
  return result
}

export default {
  get,
  getById
}

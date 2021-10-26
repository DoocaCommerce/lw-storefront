import { getBrandByID, getBrands } from '../repositories/BrandRepository'

export default {
  async get() {
    const result = await getBrands({ fields: ['name'] })

    console.log(result)
  },
  async getById(id) {
    const result = await getBrandByID(id)

    console.log(result)
  }
}

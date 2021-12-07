import BrandService from '../BrandService'

jest.mock('../BrandRepository', () => {
  return { getBrands: () => [{ name: 'opaa' }] }
})

describe('Brand Service', () => {
  it('Get brands', async () => {
    const result = await BrandService.get()

    expect(result[0]).toMatchObject({ name: 'opaa' })
    expect(result.some(({ name }) => name === 'opaa')).toBe(true)
  })
})

import { Shop, ShopFields } from '../ShopTypes'
import { ShopService } from '../ShopService'
import 'isomorphic-fetch'

const SELECTED_FIELDS: Array<ShopFields> = ['shop_id', 'name', 'slug']

describe('Shop Module', () => {
  it('Should Get shop with all fields successfully', async () => {
    const shopResult: Shop = await ShopService.getShop()
    expect(!shopResult.shop_id != null).toBeTruthy()
  })

  it('Should Get shop with selected fields successfully', async () => {
    const shopResult: Shop = await ShopService.getShop([...SELECTED_FIELDS])
    const shopResultKeys = Object.keys(shopResult).filter(key => key != '__typename')
    expect(shopResultKeys).toEqual(SELECTED_FIELDS)
    expect(shopResultKeys.length).toEqual(SELECTED_FIELDS.length)
  })
})

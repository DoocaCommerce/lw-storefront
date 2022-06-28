import { client } from '../../services/GraphqlService'
import { Shop, ShopFields, ShopResponse } from './ShopTypes'

const SHOP_DEFAULT_FIELDS = [
  'shop_id',
  'theme_id',
  'terms_user_id',
  'users_count',
  'products_count',
  'name',
  'slug',
  'dooca_domain',
  'shipping_time_additional',
  'shipping_time_additional_kit',
  'append_to_head',
  'append_to_body',
  'zipcode',
  'customer_register_approves',
  'customer_registerFor',
  'terms_accepted_at',
  'created_at',
  'notifications',
  'schedule_delivery',
  'active',
  'enable_beta',
  'ssl',
  'redirect_temporary',
  'catalog',
  'checkout_note_active',
  'gift_wrapping_active',
  'customer_register_individual',
  'customer_register_company',
  'google_connect',
  'facebook_connect',
  'ideris_connect',
  'updated_at',
  'industry',
  'phrase',
  'description',
  'keywords',
  'email',
  'email_from',
  'domain',
  'shipping_restriction_message',
  'policy_footer',
  'company',
  'cgc',
  'city',
  'state',
  'street',
  'Int',
  'detail',
  'district',
  'phone',
  'checkout_note_label',
  'gift_wrapping_price',
  'tracker_google_analytics',
  'tracker_google_conversion',
  'tracker_facebook_pixel',
  'organization',
  'suspended_at',
  'canceled_at',
  'deleted_at',
  'trial',
  'plan'
]

export class ShopRepository {
  static async getShop(fields?: Array<ShopFields>): Promise<Shop> {
    const shopQueryFields = (fields || SHOP_DEFAULT_FIELDS).join()

    const shopPageQuery = `
        query Shop {
            shop {
                ${shopQueryFields}
            }
        }
        `

    const { shop }: ShopResponse = await client.query(shopPageQuery)

    return shop
  }
}

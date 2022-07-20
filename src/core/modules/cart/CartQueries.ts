export class CartQueries {
  fields: null | Array<string>

  constructor(fields) {
    this.fields = fields || this.defaultFields()
  }

  private getFields() {
    return this.fields.join()
  }

  private defaultFields() {
    return [
      'id',
      'token',
      `customer {
        email, 
        doc, 
        newsletter, 
        first_name, 
        last_name, 
        name, 
        phone
      }`,
      `address {
        receiver, 
        zipcode, 
        street, 
        Int, 
        detail, 
        district, 
        city, 
        state
      }`,
      'coupon',
      'shipping_token',
      'payment_token',
      'creditcard {cvv, exp, name, Int}',
      `items {
        id,
        name,
        variation,
        is_virtual,
        quantity,
        allowed_gift_wrapping,
        total_cost,
        total,
        price,
        price_cost,
        stock_balance,
        can_sell_out_of_stock,
        variation_id,
        additional_price,
        price_gift_wrapping,
        allowed_gift_wrapping_price,
        discount,
        price_compare,
        image {src, alt},
        customize {
            id, 
            name, 
            content {
                id, 
                field, 
                value, 
                price
            }
        },
        components {variation_id, component_id}
      }`
    ]
  }

  getCartQuery() {
    return `query Query($cartToken: String) {
        cart(cart_token: $cartToken) {
          ${this.getFields()}
        }
      }`
  }

  addItemQuery() {
    return `mutation Mutation($cartToken: String, $items: [CartItemAddInput]) {
        addItem(cart_token: $cartToken, items: $items) {
          ${this.getFields()}
        }
      }`
  }

  updateItemQuery() {
    return `mutation Mutation($cartToken: String!, $item: updateItemTypeInput) {
        updateItem(cart_token: $cartToken, item: $item) {
          ${this.getFields()}
        }
      }`
  }

  deleteItemQuery() {
    return `mutation DeleteItem($cartToken: String!, $item: deleteItemTypeInput) {
        deleteItem(cart_token: $cartToken, item: $item) {
          ${this.getFields()}
        }
      }`
  }

  cleanCartQuery() {
    return `mutation CleanCart($cartToken: String!, $items: [deleteItemTypeInput]) {
        cleanCart(cartToken: $cartToken, items: $items) {
          ${this.getFields()}
        }
      }`
  }
}

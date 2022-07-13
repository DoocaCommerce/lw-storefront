import { useEffect, useState } from 'react'
import { CookieService } from '../../core/services/CookieService'
import { services } from '../../core'
import { Cart, CartItemAddInput, CartItemDeleteInput, CartItemUpdateInput } from '../../core/modules/cart/CartTypes'

type CartMutation<T> = (input: T) => Promise<any>

interface CartHook {
  data: Cart | {}
  addItem: CartMutation<Array<CartItemAddInput>>
  updateItem: CartMutation<CartItemUpdateInput>
  deleteItem: CartMutation<CartItemDeleteInput>
}

const COOKIE_CART = '_dc_cart'

export function useCart(): CartHook {
  const [cart, setCart] = useState<Cart | {}>({})
  const [cartToken, setCartToken] = useState<string>('')

  async function addItem(input: Array<CartItemAddInput>): Promise<any> {
    try {
      const updatedCart = await services.cart.addItem({ items: input, ...(cartToken ? { cartToken: cartToken } : {}) })
      if (updatedCart) setCart(updatedCart)
    } catch (error) {
      setCart({})
    }
  }

  async function updateItem(input: CartItemUpdateInput): Promise<any> {
    try {
      const updatedCart: Cart = await services.cart.updateItem({
        item: input,
        ...(cartToken ? { cartToken: cartToken } : {})
      })
      updatedCart && setCart(updatedCart)
    } catch (error) {
      setCart({})
    }
  }

  async function deleteItem(input: CartItemDeleteInput): Promise<any> {
    try {
      const updatedCart = await services.cart.deleteItem({
        item: input,
        ...(cartToken ? { cartToken: cartToken } : {})
      })

      if (updatedCart) {
        const isCartEmpty = !updatedCart.token
        setCart(isCartEmpty ? {} : updatedCart)
        isCartEmpty && setCartToken('')
      }
    } catch (error) {
      setCart({})
    }
  }

  async function getCart(token: string) {
    try {
      const result = await services.cart.getCart(token)
      return result
    } catch (error) {
      setCart({})
      return {}
    }
  }

  useEffect(() => {
    const token = cartToken || CookieService.getCookie(COOKIE_CART)
    if (token) {
      getCart(token).then(cartResponse => setCart(cartResponse))
    }
  }, [])

  return {
    data: cart,
    addItem: addItem,
    updateItem: updateItem,
    deleteItem: deleteItem
  }
}

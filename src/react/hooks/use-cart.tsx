import { useEffect, useState } from 'react'
import { CookieService } from '../../core/services/CookieService'
import { services } from '../../core'
import { Cart, CartItemAddInput, CartItemDeleteInput, CartItemUpdateInput } from '../../core/modules/cart/CartTypes'

type CartMutation<T> = (input: T) => Promise<any>

interface CartHook {
  data: Cart
  addItem: CartMutation<Array<CartItemAddInput>>
  updateItem: CartMutation<CartItemUpdateInput>
  deleteItem: CartMutation<CartItemDeleteInput>
}

const COOKIE_CART = '_dc_cart'

export function useCart(): CartHook {
  const [cart, setCart] = useState<Cart | {}>({})
  const [cartToken, setCartToken] = useState<string>('')

  function setToken(token: string) {
    if (token) {
      setCartToken(token)
      CookieService.setCookie(COOKIE_CART, token, 7)
    }
  }

  function eraseToken() {
    setCartToken('')
    CookieService.eraseCookie(COOKIE_CART)
  }

  function sanitizeCart() {
    setCart({})
    eraseToken()
  }

  async function addItem(input: Array<CartItemAddInput>): Promise<any> {
    try {
      const updatedCart = await services.cart.addItem({ items: input, ...(cartToken ? { cartToken: cartToken } : {}) })
      updatedCart && setCart(updatedCart)
      !cartToken && setToken(updatedCart.token)
    } catch (error) {}
  }

  async function updateItem(input: CartItemUpdateInput): Promise<any> {
    try {
      if (!cartToken) throw new Error('')
      const updatedCart: Cart = await services.cart.updateItem({
        item: input,
        cartToken: cartToken
      })
      updatedCart && setCart(updatedCart)
    } catch (error) {}
  }

  async function deleteItem(input: CartItemDeleteInput): Promise<any> {
    try {
      if (!cartToken) throw new Error('')
      const updatedCart = await services.cart.deleteItem({
        item: input,
        cartToken: cartToken
      })

      !updatedCart.items ? sanitizeCart() : setCart(updatedCart)
    } catch (error) {}
  }

  async function getCart() {
    try {
      if (!cartToken) throw new Error('')
      const result = await services.cart.getCart(cartToken)
      setCart(result)
    } catch (error) {
      sanitizeCart()
    }
  }

  useEffect(() => {
    const token = CookieService.getCookie(COOKIE_CART)
    if (token) {
      setToken(token)
      getCart()
    }
  }, [])

  return {
    data: cart,
    addItem: addItem,
    updateItem: updateItem,
    deleteItem: deleteItem
  }
}

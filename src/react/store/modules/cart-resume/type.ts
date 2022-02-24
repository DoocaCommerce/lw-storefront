import { BaseState } from '../../../types/BaseState'

export interface CartResumeData {
  total_quantity: Number
  subtotal: Number
  total: Number
  total_discount: Number
  token: string | null
  items: []
}

export interface CartResumeState extends BaseState {
  data: CartResumeData
}

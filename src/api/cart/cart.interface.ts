export interface Res_AddCart {}

export interface Req_AddCart {
  productId: number
  count: number
}

export interface Res_CartList {
  cartId: number
  products: Array<{
    cartDetailId: number
    profileUrl: string
    name: string
    price: number
    count: number
  }>
  totalPrice: number
}

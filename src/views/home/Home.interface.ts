export interface Product {
  imgUrl: string
  price: string
  brand: string
  name: string
  likeCnt: number
  rating: number
  kind: 'top' | 'bottom'
}

export type Res_Product_List = Array<Product>

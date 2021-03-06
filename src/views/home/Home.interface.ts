export interface Product {
  id: number
  imgUrl: string
  price: string
  brand: string
  name: string
  likeCnt: number
  rating: number
  kind: 'top' | 'bottom'
  isLike: boolean
}

export type Res_Product_List = Array<Product>

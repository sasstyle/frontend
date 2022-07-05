export interface Product {
  categoryId: number
  productId: number
  imageUrl: string
  name: string
  price: number
}

export type Product_List = Array<Product>

export type Product_Sort = {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}

import { Product_List, Product_Sort } from '../../core/types/product'

export interface Req_ProductList {
  categoryId?: number
  page: number
  size?: number
}

export interface Res_ProductList {
  content: Product_List
  pageable: {
    sort: Product_Sort
    offset: number
    pageNumber: number
    pageSize: number
    paged: boolean
    unpaged: boolean
  }
  last: boolean
  totalPages: number
  totalElements: number
  number: number
  sort: {
    empty: true
    sorted: false
    unsorted: true
  }
  size: number
  first: boolean
  numberOfElements: number
  empty: boolean
}

export type Res_ProductAutoComplete = Array<string>

export interface Req_ProductList_Search {
  sort?: string
  name: string
}

export interface Res_Product {
  profileUrl: string
  name: string
  brandName: string
  price: number
  topDescription: string
  bottomDescription: string
  images: Array<string>
}

export interface Req_Product {
  id: number
}

export interface Req_Post_Product {
  categoryId: number
  imageUrl: string
  name: string
  price: number
  stockQuantity: number
  topDescription: string
  bottomDescription: string
  detailImages: Array<string>
}

export interface Res_Post_Product {
  productId: number
}

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

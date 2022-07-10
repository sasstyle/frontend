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
  sort: string
  name: string
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

import productList from '../mock/product.js'

export const getProductList = () => {
  const config = {
    type: 'get',
    path: '/',
    response: {
      data: productList,
    },
  }
  return config
}

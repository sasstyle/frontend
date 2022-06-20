import productList from '../mock/product.js'

export const getProductDetail = (id) => {
  const config = {
    type: 'get',
    path: '/product/:id',
    response: {
      data: productList[id],
    },
  }
  return config
}

import express from 'express'
import cors from 'cors'
import { getProductList } from './handler/main.js'
import productList from './mock/product.js'
import { getProductDetail } from './handler/productDetail.js'

let corsOptions = {
  origin: '*',
  credentials: true,
}

export const app = express()

app.use(cors(corsOptions))
app.set('port', process.env.PORT || 4000)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// '/' main product list
const productListConfig = getProductList()
app[productListConfig.type](productListConfig.path, async (req, res) => {
  return res.json(productListConfig.response)
})

// '/product/:id' product detail
const productDetailConfig = getProductDetail()
app[productDetailConfig.type](productDetailConfig.path, async (req, res) => {
  let { id } = req.params
  return res.json(getProductDetail(id).response)
})

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중')
})

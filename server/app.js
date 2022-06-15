const express = require('express')
const cors = require('cors')
const { productList } = require('./handler/main')

let corsOptions = {
  origin: '*',
  credentials: true,
}

const app = express()
app.use(cors(corsOptions))
app.set('port', process.env.PORT || 4000)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app[productList.type](productList.path, async (req, res) => {
  return res.json(productList.response)
})

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중')
})

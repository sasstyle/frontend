const productList = {
  type: 'get',
  path: '/',
  response: {
    data: [
      {
        imgUrl: 'https://image.msscdn.net/images/goods_img/20210428/1926048/1926048_1_320.jpg',
        price: '25000',
        name: '바지',
        likeCnt: 10,
        rating: 3.5,
        kind: 'bottom',
      },
      {
        imgUrl: 'https://image.msscdn.net/images/goods_img/20210708/2024232/2024232_1_500.jpg?t=20220316144454',
        price: '45000',
        name: '셔츠 1',
        likeCnt: 4,
        rating: 4,
        kind: 'top',
      },
      {
        imgUrl: 'https://image.msscdn.net/images/goods_img/20210708/2024212/2024212_3_500.jpg?t=20220316144423',
        price: '60000',
        name: '셔츠 2',
        likeCnt: 10,
        rating: 5,
        kind: 'top',
      },
    ],
  },
}

module.exports = {
  productList,
}

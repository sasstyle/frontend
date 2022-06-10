export interface Req_Signup {
  username: string
  password: string // 글자수랑 + 특수문자 1개
  name: string
  gender: 'MAN' | 'WOMAN'
  email: string // 이메일 정규식
  phoneNumber: string // 핸드폰 정규식
  city: string
  street: string
  zipcode: string
}

export interface Res_Signup {
  userId: number
  userName: string
}

export interface Req_Login {
  username: string
  password: string
}

export interface Res_Login {
  accessToken: string
  refreshToken: string
}

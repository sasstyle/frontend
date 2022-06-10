export interface Req_Signup {
  username: string
  password: string
  name: string
  gender: 'MAN' | 'WOMAN'
  email: string
  phoneNumber: string
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

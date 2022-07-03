export interface Req_Signup {
  username: string
  password: string
  name: string
  gender: string
  email: string
  phoneNumber: string
  address: string
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

export interface Res_IsUser {
  name: string
  gender: string
  email: string
  phoneNumber: string
  address: string
}

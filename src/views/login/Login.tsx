import AppButton from '../../core/components/AppButton'
import AppInput from '../../core/components/AppInput'
import { Req_Login } from '../signup/signup.interface'
import { useRequestLoginMutation } from '../signup/Signup.query'

export default function Login() {
  const [login, { isLoading }] = useRequestLoginMutation()

  const onLogin = async () => {
    const TEST: Req_Login = {
      username: 'aa',
      password: 'pppp',
    }

    try {
      const result = login(TEST).unwrap()
      console.log('login fullied', result)
    } catch (err: any) {
      const { status } = err
    }
  }

  return (
    <>
      <AppInput placeHolder="id" />
      <AppInput placeHolder="비밀번호" />
      <AppButton content="Login" radius="2rem" onClick={onLogin} />
    </>
  )
}

import AppButton from '../../core/components/AppButton'
import AppInput from '../../core/components/AppInput'
import { useInput } from '../../core/hooks/useInput'
import { Req_Login } from '../signup/signup.interface'
import { useRequestLoginMutation } from '../signup/Signup.query'

export default function Login() {
  const [login, { isLoading }] = useRequestLoginMutation()

  const { value: username, onSetValue: setUserName } = useInput('')
  const { value: password, onSetValue: setPassword } = useInput('')

  const onLogin = async () => {
    const values = {
      username,
      password,
    }

    try {
      const result = login(values).unwrap()
      console.log('login fullied', result)
    } catch (err: any) {
      const { status } = err
    }
  }

  return (
    <>
      <AppInput placeHolder="username" value={username} onSetValue={setUserName} />
      <AppInput placeHolder="password" value={password} onSetValue={setPassword} />
      <AppButton content="Login" radius="2rem" onClick={onLogin} />
    </>
  )
}

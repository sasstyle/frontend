import { Player } from '@lottiefiles/react-lottie-player'
import AppButton from '../../core/components/AppButton'
import AppInput from '../../core/components/AppInput'
import { useInput } from '../../core/hooks/useInput'
import { useRequestLoginMutation } from '../signup/Signup.query'
import animationData from '../../designs/assets/lottieLogin.json'
import * as UI from './Login.styled'

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
      <Player autoplay loop src={animationData} style={{ height: '400px', width: '400px' }}></Player>
      <UI.LoginWrap>
        <AppInput placeHolder="Name" value={username} onSetValue={setUserName} />
        <AppInput placeHolder="Password" value={password} onSetValue={setPassword} />
        <AppButton content="Log in" radius="2rem" onClick={onLogin} />
      </UI.LoginWrap>
    </>
  )
}

import { Player } from '@lottiefiles/react-lottie-player'
import animationData from '../../designs/assets/lottieSignup.json'
import * as UI from './Signup.styled'
import AppButton from '../../core/components/AppButton'
import AppInput from '../../core/components/AppInput'
import AppSelectBox from '../../core/components/AppSelectBox'
import { useInput } from '../../core/hooks/useInput'
import { useRequestSignupMutation } from './Signup.query'
import { useSelect } from '../../core/hooks/useSelect'

export default function SignUp() {
  const [signUp, { isLoading }] = useRequestSignupMutation()

  const { value: username, onSetValue: setUserName } = useInput('')
  const { value: password, onSetValue: setPassword } = useInput('')
  const { value: name, onSetValue: setName } = useInput('')
  const { value: gender, onSetValue: setGender, optionList } = useSelect(['WOMAN', 'MAN'])
  const { value: email, onSetValue: setEmail } = useInput('')
  const { value: phoneNumber, onSetValue: setPhone } = useInput('')
  const { value: address, onSetValue: setAddress } = useInput('')

  const onSignUp = async () => {
    const values = {
      username,
      password,
      name,
      gender,
      email,
      phoneNumber,
      address,
    }
    try {
      await signUp(values)
    } catch (err: any) {
      const { status } = err
    }
  }
  return (
    <>
      <Player autoplay loop src={animationData} style={{ height: '200px', width: '200px' }} />
      <AppInput placeHolder="username" value={username} onSetValue={setUserName} />
      <AppInput placeHolder="password" value={password} onSetValue={setPassword} />
      <UI.selectWrap>
        <AppInput placeHolder="name" value={name} onSetValue={setName} />
        <AppSelectBox optionList={optionList} onSetValue={setGender} />
      </UI.selectWrap>
      <AppInput placeHolder="email" value={email} onSetValue={setEmail} />
      <AppInput placeHolder="phoneNumber" value={phoneNumber} onSetValue={setPhone} />
      <AppInput placeHolder="address" value={address} onSetValue={setAddress} />
      <AppButton content="Sign up" radius="2rem" onClick={onSignUp} />
    </>
  )
}

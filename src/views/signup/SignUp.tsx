import AppButton from '../../core/components/AppButton'
import AppInput from '../../core/components/AppInput'
import AppTitle from '../../core/components/AppTitle'
import { useInput } from '../../core/hooks/useInput'
import { Req_Signup } from './signup.interface'
import { useRequestSignupMutation } from './Signup.query'

export default function SignUp() {
  const [signUp, { isLoading }] = useRequestSignupMutation()

  const { value: username, onSetValue: setUserName } = useInput('')
  const { value: password, onSetValue: setPassword } = useInput('')
  const { value: name, onSetValue: setName } = useInput('')
  const { value: gender, onSetValue: setGender } = useInput('')
  const { value: email, onSetValue: setEmail } = useInput('')
  const { value: phoneNumber, onSetValue: setPhone } = useInput('')
  const { value: address_detail, onSetValue: setAddress } = useInput('')

  const onSignUp = async () => {
    const values = {
      username,
      password,
      name,
      gender,
      email,
      phoneNumber,
      address_detail,
    }
    try {
      await signUp(values)
    } catch (err: any) {
      const { status } = err
    }
  }
  return (
    <>
      <AppTitle title="Create your Account" />
      <AppInput placeHolder="username" value={username} onSetValue={setUserName} />
      <AppInput placeHolder="password" value={password} onSetValue={setPassword} />
      <AppInput placeHolder="name" value={name} onSetValue={setName} />
      <AppInput placeHolder="gender" value={gender} onSetValue={setGender} />
      <AppInput placeHolder="email" value={email} onSetValue={setEmail} />
      <AppInput placeHolder="phoneNumber" value={phoneNumber} onSetValue={setPhone} />
      <AppInput placeHolder="address_detail" value={address_detail} onSetValue={setAddress} />
      <AppButton content="sign up" radius="2rem" onClick={onSignUp} />
    </>
  )
}

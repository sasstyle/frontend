import AppButton from '../../core/components/AppButton'
import AppTitle from '../../core/components/AppTitle'
import { Req_Signup } from './signup.interface'
import { useRequestSignupMutation } from './Signup.query'

export default function SignUp() {
  const [signUp, { isLoading }] = useRequestSignupMutation()

  const onSignUp = async () => {
    const TEST: Req_Signup = {
      username: 'aa',
      password: 'pppp',
      name: 'name',
      gender: 'WOMAN',
      email: 'aaa@aaa.com',
      phoneNumber: '123-4456-777',
      city: 'seoul',
      street: 'street123',
      zipcode: '123-123',
    }
    try {
      await signUp(TEST)
    } catch (err: any) {
      const { status } = err
    }
  }
  return (
    <>
      <AppTitle title="Create your Account" />
      <AppButton content="sign up" radius="2rem" onClick={onSignUp} />
    </>
  )
}

import AppButton from '../../core/components/AppButton'
import AppTitle from '../../core/components/AppTitle'

export default function SignUp() {
  const onLogin = () => {}
  return (
    <>
      <AppTitle title="Create your Account" />
      <AppButton content="sign up" radius="2rem" onClick={onLogin} />
    </>
  )
}

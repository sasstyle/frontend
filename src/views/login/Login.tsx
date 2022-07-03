import { Player } from '@lottiefiles/react-lottie-player'
import AppButton from '../../core/components/AppButton'
import AppInput from '../../core/components/AppInput'
import { useInput } from '../../core/hooks/useInput'
import { useRequestLoginMutation } from '../../api/auth/auth.query'
import animationData from '../../designs/assets/lottieLogin.json'
import * as UI from './Login.styled'
import { REG_PASSWORD, REG_USERNAME } from '../../core/constant/reg'
import AppLink from '../../core/components/AppLink'

export default function Login() {
  const [login, { isLoading }] = useRequestLoginMutation()

  const { value: username, onSetValue: setUserName, isValid: isValidUserName } = useInput('', REG_USERNAME)
  const { value: password, onSetValue: setPassword, isValid: isValidPw } = useInput('', REG_PASSWORD)

  const isAllValid = [isValidUserName, isValidPw].every((ele) => ele === true)

  const onLogin = async () => {
    const values = {
      username,
      password,
    }

    try {
      const result = login(values).unwrap()
    } catch (err: any) {
      const { status } = err
    }
  }

  return (
    <UI.LoginWrap>
      <Player autoplay loop src={animationData} style={{ height: '300px', width: '300px' }}></Player>
      <AppInput
        label="아이디"
        placeHolder="영어, 숫자 4 ~ 13 글자"
        value={username}
        onSetValue={setUserName}
        errorMessage={!isValidUserName ? '아이디는 영어, 숫자로 4글자 이상, 13글자 이하입니다.' : ''}
      />
      <AppInput
        type="password"
        label="비밀번호"
        placeHolder="영어, 숫자, 특수문자 8 ~ 13 글자"
        value={password}
        onSetValue={setPassword}
        errorMessage={!isValidPw ? '아이디는 영어, 숫자, 특수문자로 8글자 이상, 13글자 이하입니다.' : ''}
      />
      <AppButton content="로그인" radius="2rem" onClick={onLogin} disabled={!isAllValid} />
      <AppLink href="/signup" content="회원가입 하러가기" />
    </UI.LoginWrap>
  )
}

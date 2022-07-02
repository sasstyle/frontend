import { Player } from '@lottiefiles/react-lottie-player'
import animationData from '../../designs/assets/lottieSignup.json'
import * as UI from './Signup.styled'
import AppButton from '../../core/components/AppButton'
import AppInput from '../../core/components/AppInput'
import AppSelectBox from '../../core/components/AppSelectBox'
import { useInput } from '../../core/hooks/useInput'
import { useRequestSignupMutation } from '../../api/auth/auth.query'
import { useSelect } from '../../core/hooks/useSelect'
import { REG_EMAIL, REG_NAME, REG_PASSWORD, REG_PH, REG_USERNAME } from '../../core/constant/reg'
import AppLink from '../../core/components/AppLink'

export default function SignUp() {
  const [signUp, { isLoading }] = useRequestSignupMutation()

  const { value: username, onSetValue: setUserName, isValid: isValidUserName } = useInput('', REG_USERNAME)
  const { value: password, onSetValue: setPassword, isValid: isValidPw } = useInput('', REG_PASSWORD)
  const { value: name, onSetValue: setName, isValid: isValidName } = useInput('', REG_NAME)
  const { value: gender, onSetValue: setGender, optionList } = useSelect(['WOMAN', 'MAN'])
  const { value: email, onSetValue: setEmail, isValid: isValidEmail } = useInput('', REG_EMAIL)
  const { value: phoneNumber, onSetValue: setPhone, isValid: isValidPh } = useInput('', REG_PH)
  const { value: address, onSetValue: setAddress } = useInput('')

  const isAllValid = [isValidUserName, isValidPw, isValidName, isValidEmail, isValidPh].every((ele) => ele === true)

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
    <UI.Wrap>
      <Player autoplay loop src={animationData} style={{ height: '180px', width: '180px' }} />
      <UI.FormWrap>
        <AppInput
          type="text"
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
        <UI.selectWrap>
          <AppInput
            type="text"
            label="이름"
            placeHolder="김OO"
            value={name}
            onSetValue={setName}
            errorMessage={!isValidName ? '성함을 입력해주세요.' : ''}
          />
          <AppSelectBox label="성별" optionList={optionList} onSetValue={setGender} />
        </UI.selectWrap>
        <AppInput
          type="text"
          label="이메일"
          placeHolder="email@naver.com"
          value={email}
          onSetValue={setEmail}
          errorMessage={!isValidEmail ? '이메일 형식으로 입력해주세요.' : ''}
        />
        <AppInput
          type="text"
          label="핸드폰 번호"
          placeHolder="010-1234-5678"
          value={phoneNumber}
          onSetValue={setPhone}
          errorMessage={!isValidPh ? '번호 형식으로 입력해주세요.' : ''}
        />
        <AppInput type="text" label="지역" placeHolder="address" value={address} onSetValue={setAddress} />
        <AppButton content="회원가입" radius="2rem" onClick={onSignUp} disabled={!isAllValid || address === ''} />
      </UI.FormWrap>
      <AppLink href="/login" content="로그인 하러가기" />
    </UI.Wrap>
  )
}

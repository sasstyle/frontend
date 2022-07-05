import { BsBell, BsCart2 } from 'react-icons/bs'
import * as UI from './UserUpdate.styled'
import AppHeader from '../../core/components/AppHeader'
import AppInput from '../../core/components/AppInput'
import AppSelectBox from '../../core/components/AppSelectBox'
import { REG_EMAIL, REG_NAME, REG_PASSWORD, REG_PH, REG_USERNAME } from '../../core/constant/reg'
import { useInput } from '../../core/hooks/useInput'
import { useSelect } from '../../core/hooks/useSelect'
import AppButton from '../../core/components/AppButton'

function HeaderIcon() {
  return (
    <div>
      <BsBell style={{ marginRight: '1.3rem' }} />
      <BsCart2 />
    </div>
  )
}

export default function UserUpdate() {
  const { value: name, onSetValue: setName, isValid: isValidName } = useInput('', REG_NAME)
  const { value: password, onSetValue: setPassword, isValid: isValidPw } = useInput('', REG_PASSWORD)
  const { value: gender, onSetValue: setGender, optionList: genderList } = useSelect(['WOMAN', 'MAN'])
  const { value: email, onSetValue: setEmail, isValid: isValidEmail } = useInput('', REG_EMAIL)
  const { value: phoneNumber, onSetValue: setPhone, isValid: isValidPh } = useInput('', REG_PH)
  const { value: address, onSetValue: setAddress } = useInput('')

  // 프로필 변경 추가해야 함
  return (
    <>
      <AppHeader title="마이페이지" icon={HeaderIcon()} />
      <UI.Wrap>
        <AppInput
          type="text"
          label="이름 변경"
          placeHolder=""
          value={name}
          onSetValue={setName}
          errorMessage={!isValidName ? '성함을 입력해주세요.' : ''}
        />
        <AppInput
          type="password"
          label="비밀번호 변경"
          placeHolder="영어, 숫자, 특수문자 8 ~ 13 글자"
          value={password}
          onSetValue={setPassword}
          errorMessage={!isValidPw ? '아이디는 영어, 숫자, 특수문자로 8글자 이상, 13글자 이하입니다.' : ''}
        />
        <AppInput
          type="text"
          label="이메일 변경"
          placeHolder="email@naver.com"
          value={email}
          onSetValue={setEmail}
          errorMessage={!isValidEmail ? '이메일 형식으로 입력해주세요.' : ''}
        />
        <AppSelectBox label="성별" optionList={genderList} onSetValue={setGender} />
        <AppInput
          type="text"
          label="핸드폰 번호 변경"
          placeHolder="010-1234-5678"
          value={phoneNumber}
          onSetValue={setPhone}
          errorMessage={!isValidPh ? '번호 형식으로 입력해주세요.' : ''}
        />
        <AppInput type="text" label="지역 변경" placeHolder="address" value={address} onSetValue={setAddress} />
        <AppButton content="변경 정보 저장하기" onClick={() => {}} radius="0.3rem" />
      </UI.Wrap>
    </>
  )
}

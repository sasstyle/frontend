import { BsBell, BsCart2 } from 'react-icons/bs'
import * as UI from './UserUpdate.styled'
import AppHeader from '../../core/components/AppHeader'
import AppInput from '../../core/components/AppInput'
import AppSelectBox from '../../core/components/AppSelectBox'
import { REG_EMAIL, REG_NAME, REG_PASSWORD, REG_PH, REG_USERNAME } from '../../core/constant/reg'
import { useInput } from '../../core/hooks/useInput'
import { useSelect } from '../../core/hooks/useSelect'
import AppButton from '../../core/components/AppButton'
import { useCheckIsUserQuery, useUpdateUserInfoMutation } from '../../api/auth/auth.query'
import { useAppDispatch } from '../../core/hooks/redux'
import { useNavigate } from 'react-router-dom'

function HeaderIcon() {
  return (
    <div>
      <BsBell style={{ marginRight: '1.3rem' }} />
      <BsCart2 />
    </div>
  )
}

export default function UserUpdate() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { data: userData, isLoading, isError } = useCheckIsUserQuery()
  const [updateUser] = useUpdateUserInfoMutation()

  const { value: name, onSetValue: setName, isValid: isValidName } = useInput(userData?.name, REG_NAME)
  const { value: password, onSetValue: setPassword, isValid: isValidPw } = useInput('', REG_PASSWORD)
  const { value: gender, onSetValue: setGender, optionList: genderList } = useSelect(['WOMAN', 'MAN'])
  const { value: email, onSetValue: setEmail, isValid: isValidEmail } = useInput(userData?.email, REG_EMAIL)
  const { value: phoneNumber, onSetValue: setPhone, isValid: isValidPh } = useInput(userData?.phoneNumber, REG_PH)
  const { value: address, onSetValue: setAddress } = useInput(userData?.address)

  const isAllValid = [isValidPw, isValidName, isValidEmail, isValidPh].every((ele) => ele === true)
  const onUpdateProfile = async () => {
    const values = {
      name: name ? name : userData?.name,
      password: password ? password : userData?.password,
      gender: gender ? gender : userData?.gender,
      email: email ? email : userData?.email,
      phoneNumber: phoneNumber ? phoneNumber : userData?.phoneNumber,
      address: address ? address : userData?.address,
    }
    console.log(values)

    updateUser(values)
      .unwrap()
      .then((res: any) => {
        console.log(res)
        window.alert('프로필을 수정했습니다.')
        // navigate('/user')
        // dispatch(setIsDimmed(true))
        // setIsModal('success')
      })
      .catch((err) => {
        console.log(err)
        // dispatch(setIsDimmed(true))
        // setIsModal('error')
      })
  }

  return (
    <>
      <AppHeader title="마이페이지" icon={HeaderIcon()} />
      <UI.Wrap>
        <AppInput
          type="text"
          label="이름 변경"
          placeHolder={String(userData?.name)}
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
          placeHolder={String(userData?.email)}
          value={email}
          onSetValue={setEmail}
          errorMessage={!isValidEmail ? '이메일 형식으로 입력해주세요.' : ''}
        />
        <AppSelectBox label="성별" optionList={genderList} onSetValue={setGender} />
        <AppInput
          type="text"
          label="핸드폰 번호 변경"
          placeHolder={String(userData?.phoneNumber)}
          value={phoneNumber}
          onSetValue={setPhone}
          errorMessage={!isValidPh ? '번호 형식으로 입력해주세요.' : ''}
        />
        <AppInput
          type="text"
          label="지역 변경"
          placeHolder={String(userData?.address)}
          value={address}
          onSetValue={setAddress}
        />
        <AppButton content="변경 정보 저장하기" onClick={onUpdateProfile} radius="0.3rem" />
      </UI.Wrap>
    </>
  )
}

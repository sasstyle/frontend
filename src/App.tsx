import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { selectIsDimmed, setIsDimmed } from './App.slice'
import { AppInner, Dimmed } from './App.styled'
import { useAppSelector } from './core/hooks/redux'

import AppNav from './core/components/AppNav'
import { useDispatch } from 'react-redux'
const Home = lazy(() => import('./views/home/Home'))
const Login = lazy(() => import('./views/login/Login'))
const SignUp = lazy(() => import('./views/signup/SignUp'))
const User = lazy(() => import('./views/user/User'))
const UpdateUser = lazy(() => import('./views/userUpdate/UserUpdate'))
const Product = lazy(() => import('./views/product/Product'))
const SellerAdmin = lazy(() => import('./views/sellerAdmin/SellerAdmin'))

export default function App() {
  const isDimmed = useAppSelector(selectIsDimmed)
  const dispatch = useDispatch()
  const closeDimmed = () => dispatch(setIsDimmed(false))

  return (
    <Suspense fallback={<div>Loading</div>}>
      <AppInner isDimmed={isDimmed}>
        {isDimmed && <Dimmed onClick={closeDimmed} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/update" element={<UpdateUser />} />
          <Route path="/user/admin" element={<SellerAdmin />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <AppNav />
      </AppInner>
    </Suspense>
  )
}

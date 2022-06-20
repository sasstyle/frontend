import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppInner } from './App.styled'
import AppNav from './core/components/AppNav'

const Home = lazy(() => import('./views/home/Home'))
const Login = lazy(() => import('./views/login/Login'))
const SignUp = lazy(() => import('./views/signup/SignUp'))
const User = lazy(() => import('./views/user/User'))
const Product = lazy(() => import('./views/product/Product'))

export default function App() {
  return (
    <AppInner>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user" element={<User />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <AppNav />
    </AppInner>
  )
}

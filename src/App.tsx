import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppInner } from './App.styled'
import AppNav from './core/components/AppNav'

const Home = lazy(() => import('./views/home/Home'))
const Login = lazy(() => import('./views/login/Login'))
const SignUp = lazy(() => import('./views/signup/SignUp'))

export default function App() {
  return (
    <AppInner>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <AppNav />
    </AppInner>
  )
}

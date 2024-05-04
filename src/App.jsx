import React from 'react'
import style from "./index.module.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import HomePage from './component/Home/HomePage'
import SignupPage from './pages/Signin/SigninPage'
import Auth from './utils/Auth/auth'
import CoursesPage from './pages/courses/CoursesPage'
import RegisterPage from './pages/registration/RegisterPage'
import StudentPage from './pages/student/StudentPage'
import AdminPage from './pages/admin/AdminPage'
import DashboardLayout from './Layout/dashboard-layout'
import ForgetPassword from './pages/forgetPassword/ForgetPassword'
import DashboardPage from './component/Dashboard/DashboardPage'
import EnrollPage from './pages/enroll/EnrollPage'

const App = () => {
  return (
    <div className={style.app}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route element={<Auth/>}> 
            <Route path='/dashboard' element={<DashboardPage/>}/>
            <Route path="/courses" element={<CoursesPage/>}/>
            <Route path='/register' element={<RegisterPage/>}>
              <Route path=':enrollmentId' element={<EnrollPage/>} />
            </Route>
            <Route path='/student' element={<StudentPage/>}/>
            <Route path='/admin' element={<AdminPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
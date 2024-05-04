import React, { useEffect } from 'react'
import style from "./LoginPage.module.css";
import logo from "../../assets/login.svg"
import { Link } from 'react-router-dom'
import { userSchemaLogin } from '../Signin/yup';
import { useFormik } from 'formik';
import { useAuth } from '../../utils/AppContext/AuthProvider';

const LoginPage = () => {
  const {loginUser, user} = useAuth();
  
  useEffect(()=>{
    if(user){
      navigate("/")
    }
  },[])

   const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: userSchemaLogin,
    onSubmit: (values,actions) =>{
    const userInfo = values; 
    loginUser(userInfo);
    actions.resetForm();
    }
   })
  return (
    <div className={style["login-page"]}>
      <div className={style["form-group"]}>
        <h1 style={{marginBottom: "20px"}}>Login</h1>
        <h3 style={{marginBottom: "5px", fontSize:"20px"}}>Welcome Back</h3>
        <h6 style={{marginBottom: "50px", fontSize:"14px", fontWeight:"lighter"}}>Please enter your login credentials</h6>
        <form className={style["form-container"]}>
          <div className={style["form-control"]}>
            <label htmlFor='email'>Email</label>
            <input 
              name="email" 
              type="email" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={
                formik.errors.email &&
                formik.touched.email ? 
                style["error-message"] : ""} />
              {
              formik.errors.email && 
              formik.touched.email && 
              <p style={{color: "red"}}>
                {formik.errors.email}
              </p>}
          </div>
          <div className={style["form-control"]}>
            <label htmlFor="password">Password</label>
            <input 
              name='password' 
              type="password" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={
                formik.errors.password &&
                formik.touched.password ? 
                style["error-message"] : ""} />
              {
              formik.errors.password && 
              formik.touched.password && 
              <p style={{color: "red"}}>
                {formik.errors.password}
              </p>}
          </div>
          <div className={style["form-check-container"]}>
            <div className={style["form-check"]}>
              <input type="checkbox" name='remember-me'/>
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <div className={style["forget-password"]}>
              <Link to="/forget-password">Forget Password</Link>
            </div>
          </div>
          <button type="submit">Login</button>
          <div className={style["form-bottom-text"]}>
            Don't have an account?{" "}
            <Link to="/signup">Sign up</Link>
          </div>
        </form>
       </div>
      <div className={style["logo-container"]}>
        <img src={logo} alt="logo" width={600}/>
      </div>
    </div>
  )
}

export default LoginPage
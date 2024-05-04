import React from 'react'
import logo from "../../assets/login.svg"
import style from "../Login/LoginPage.module.css"
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import userSchema from './yup'
import { useAuth } from '../../utils/AppContext/AuthProvider'

const SignupPage = () => {
  const { registerUser} = useAuth();

   const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: userSchema,
    onSubmit: (values,actions) =>{
    const userInfo = values; 
    registerUser(userInfo);
    actions.resetForm();
    }
  })
  return (
    <div className={style["login-page"]}>
      <div className={style["form-group"]}>
        <h1 style={{marginBottom: "20px"}}>SignUp</h1>
        <h3 style={{marginBottom: "50px", fontSize:"20px", fontWeight:"lighter"}}>Create your Acount</h3>
        <form className={style["form-container"]} onSubmit={formik.handleSubmit}>
          <div className={style["form-control"]}>
            <label htmlFor='name'>Name</label> 
            <input
              name= "name"
              type="text" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className={
                formik.errors.name &&
                formik.touched.name ? 
                style["error-message"] : ""} />
              {
              formik.errors.name && 
              formik.touched.name && 
              <p style={{color: "red"}}>
                {formik.errors.name}
              </p>}
          </div>
          <div className={style["form-control"]}>
            <label htmlFor='name'>Email</label>
            <input
              name= "email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email} 
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
            <label htmlFor='password'>Password</label>
            <input
              name= "password"
              type="text" 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              className={
                formik.errors.password && 
                formik.touched.password ? 
                style["error-message"] : " "}/>
              {
              formik.errors.password && 
              formik.touched.password && 
              <p style={{color: "red"}}>
                {formik.errors.password}
              </p>}
          </div>
          <button type="submit" style={{marginTop: "20px"}}>Create</button>
          <div className={style["form-bottom-text"]}>
            Already have an Account
            <Link to="/login">{" "}Login</Link>
          </div>
        </form>
      </div>
      <div className={style["logo-container"]}>
        <img src={logo} alt="logo" width={600}/>
      </div>
    </div>
  )
}

export default SignupPage
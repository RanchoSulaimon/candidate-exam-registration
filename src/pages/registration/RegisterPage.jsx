import React from 'react'
import { useFormik } from 'formik'
import userSchema from '../Signin/yup'
import { Link, useParams } from 'react-router-dom'
import style from "./RegisterPage.module.css"
import NavPage from '../../component/Navbar/NavPage'

const RegisterPage = () => {
  const {enrollmentId} = useParams;
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
    setDisplaySignin(false)
    }
  })
  return (
    <>
    <NavPage/>
    <div className={style["reg-container"]}>
      <div className={style["form-group"]}>
        {/* <h1 style={{marginBottom: "20px"}}>Exam Registration</h1> */}
        <h3 style={{marginBottom: "20px", fontSize:"20px", fontWeight:"bolder"}}>Personal Detail</h3>
        <form className={style["form-container"]} onSubmit={formik.handleSubmit}>
          <div className={style["form-holder"]}>
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
              <label htmlFor='name'>Date of Birth</label>
              <input
                name= "email"
                type="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email} />
            </div>
            <div className={style["form-control"]}>
              <label htmlFor='password'>Gender</label>
              <select>
                <option>Male</option>
                <option>Female</option>
                <option>Customize</option>
              </select>
            </div>
            <div className={style["form-control"]}>
              <label htmlFor='name'>Contact</label>
              <input
                name= "email"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}/>
            </div>
            <div className={style["form-control"]}>
              <label htmlFor='name'>Address</label>
              <input
                name= "email"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}/>
            </div>
            <div className={style["form-control"]}>
              <label htmlFor='address'>Address</label>
              <input
                name= "address"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}/>
            </div>
          </div>
          <button type="submit" style={{marginTop: "20px"}}><Link to={enrollmentId}>Enroll</Link></button>
        </form>
      </div>
      </div>
</>
  )
}
export default RegisterPage;
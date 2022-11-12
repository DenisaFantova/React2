import React from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

 const validateForm = Yup.object().shape({
     email: Yup.string()
     .email('Invalid email')
     .max(30, 'Too Long!')
     .required('Required'),

     password: Yup.string()
       .min(6, 'Too Short!')
       .max(50, 'Too Long!')
       .required('Required'),

});

// const SignupSchema = Yup.object().shape({
//     firstName: Yup.string()
//       .min(2, 'Too Short!')
//       .max(50, 'Too Long!')
//       .required('Required'),
//     lastName: Yup.string()
//       .min(2, 'Too Short!')
//       .max(50, 'Too Long!')
//       .required('Required'),
//     email: Yup.string().email('Invalid email').required('Required'),
//   });
 
const RegistrationForm = () => {
  return (

    <Formik
    initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
    }}
    validationSchema={validateForm}
    onSubmit={(values, {setSubmitting}) => {
             console.log(values);
            setSubmitting(false);
    }}
  >
    {({ errors, touched }) => (
      <Form>
         <label htmlFor="email">E-mail</label>
         <Field name="email" type="email"/>
        {errors.email && touched.email ? (
          <div>{errors.email}</div>
        ) : null}
        <label htmlFor="password">Heslo</label>
            <Field name="password" type="password"/>
            {errors.password && touched.password ? (
          <div>{errors.password}</div>
        ) : null}
      </Form>
    )}
  </Formik>


    // <Formik
    //     initialValues={{
    //         email: '',
    //         password: '',
    //         confirmPassword: '',
    //         phoneNumber: '',
    //     }}
    //     validate={validateForm}
    //     onSubmit={(values, {setSubmitting}) => {
    //         console.log(values);
    //         setSubmitting(false);
    //     }}
    // >
    //     {({ errors, touched }) => (
    //     <Form>
    //     <div>Registrační údaje
    //         <div>
    //             <label htmlFor="email">E-mail</label>
    //             <Field name="email" type="email"/>
    //             {errors.email && touched.email ? <p>{errors.email}</p> : null}
    //         </div>
    //         <div>
    //             <label htmlFor="password">Heslo</label>
    //             <Field name="password" type="password"/>
    //             {errors.password && touched.password ? <p>{errors.password}</p> : null}
    //         </div>
    //         <div>
    //             <label htmlFor="confirmPassword">Heslo znovu</label>
    //             <Field name="confirmPassword" type="password"/>
    //         </div>
    //         <div>
    //             <label htmlFor="phoneNumber">Telefonní číslo</label>
    //             <Field name="phoneNumber" type="text"/>
    //         </div>
    //     </div>
    //     <button type="submit">Odeslat</button>
    //     </Form>
    //    )}  
    // </Formik>

  )
}

export default RegistrationForm
import React from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik';

const validateForm = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Povinné pole'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Neplatná e-mailová adresa';
    }

    return errors;
}
 
const RegistrationForm = () => {
  return (
    <Formik
        initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
            phoneNumber: '',
        }}
        validate={validateForm}
        onSubmit={(values, {setSubmitting}) => {
            console.log(values);
            setSubmitting(false);
        }}
    >
        <Form>
        <div>Registrační údaje
            <div>
                <label htmlFor="email">E-mail</label>
                <Field name="email" type="text"/>
                <ErrorMessage name="email" component="p"/>
            </div>
            <div>
                <label htmlFor="password">Heslo</label>
                <Field name="password" type="password"/>
            </div>
            <div>
                <label htmlFor="confirmPassword">Heslo znovu</label>
                <Field name="confirmPassword" type="password"/>
            </div>
            <div>
                <label htmlFor="phoneNumber">Telefonní číslo</label>
                <Field name="phoneNumber" type="text"/>
            </div>
        </div>
        <button type="submit">Odeslat</button>
        </Form>
    </Formik>

  )
}

export default RegistrationForm
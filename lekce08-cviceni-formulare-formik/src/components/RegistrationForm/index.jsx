import React from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const validateForm = Yup.object().shape({
    email: Yup.string()
    .email('E-mail je ve špatném formátu')
    .max(30, 'E-mail může mít maximálně 30 znaků')
    .required('Toto pole je povinné'),

    password: Yup.string()
      .min(6, 'Heslo musí mít minimálně 6 znaků')
      .max(50, 'Heslo může mít maximálně 50 znaků')
      .required('Toto pole je povinné'),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Your passwords do not match.'),

    phoneNumber: Yup.string()
      .matches(/^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/, 'Telefonní číslo je ve špatném formátu'),

    name: Yup.string()
      .min(2, 'Jméno nebo název firmy musí být delší než 2 znaky')
      .max(40, 'Jméno nebo název firmy může mít maximálně 40 znaků'),

    street: Yup.string()
      .min(4, 'Název a číslo ulice musí mít nejméně 4 znaky')
      .max(30, 'Název a číslo ulice může mít maximálně 30 znaků'),

    city: Yup.string()
      .min(2, 'Název města musí mít nejméně 4 znaky')
      .max(20, 'Název města může mít maximálně 20 znaků'),

    zipCode: Yup.string()
    .min(4, 'PSČ musí mít nejméně 4 znaky')
    .max(6, 'PSČ může mít maximálně 6 znaků'),

    GDPR: Yup.boolean()
     .oneOf([true], 'Před odesláním formuláře musíte souhlasit s GDPR'),
});

 
const RegistrationForm = () => {
  return (

    <Formik
    initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        name: '',
        street: '',
        city: '',
        zipCode: ''
    }}
    validationSchema={validateForm}
    onSubmit={(values, {setSubmitting}) => {
             console.log(values);
            setSubmitting(false);
    }}
    >
      <Form>
        <div>
          <h3>Registrační údaje</h3>
          <div>
            <label htmlFor="email">E-mail</label>
            <Field name="email" type="email"/>
            <ErrorMessage name="email" component="p" />
          </div> 
          <div>
            <label htmlFor="password">Heslo</label>
            <Field name="password" type="password"/>
            <ErrorMessage name="password" component="p" />
          </div>
          <div>
            <label htmlFor="confirmPassword">Potvrzení hesla</label>
            <Field name="confirmPassword" type="password"/>
            <ErrorMessage name="confirmPassword" component="p" />
          </div>
          <div>
            <label htmlFor="phoneNumber">Telefon</label>
            <Field name="phoneNumber" type="text"/>
            <ErrorMessage name="phoneNumber" component="p" />
          </div>
        </div>
        <div>
          <h3>Fakturační údaje</h3>
          <div>
            <label htmlFor="name">Jméno a příjmení / Název firmy</label>
            <Field name="name" type="text"/>
            <ErrorMessage name="name" component="p" />
          </div>
          <div>
            <label htmlFor="street">Ulice a číslo</label>
            <Field name="street" type="text"/>
            <ErrorMessage name="street" component="p" />
          </div>
          <div>
            <label htmlFor="city">Město</label>
            <Field name="city" type="text"/>
            <ErrorMessage name="city" component="p" />
          </div>
          <div>
            <label htmlFor="zipCode">PSČ</label>
            <Field name="zipCode" type="text"/>
            <ErrorMessage name="zipCode" component="p" />
          </div>
        </div>
        <div>
          <h3>Ostatní</h3>
          <label htmlFor="supplyPoint">Preferované místno odběru</label>
          <Field name="supplyPoint" as="select">
            <option value="Praha">Praha</option>
            <option value="Brno">Brno</option>
            <option value="Ostrava">Ostrava</option>
            <option value="Pardubice">Pardubice</option>
            <option value="Olomouc">Olomouc</option>
          </Field>
        </div>
        <div>
          <span>Odběr newsletteru</span>
          <label>
            <Field name="newsletter" type="radio" value="Ano" />
            Ano
          </label>
          <label>
            <Field name="newsletter" type="radio" value="Ne" />
            Ne
          </label>
        </div>
        <div>
          <span>Poznámka</span>
          <label htmlFor="note">
            <Field name="note" as="textarea"></Field>
          </label>
        </div>
        <div>
          <label>
            <Field name="GDPR" type="checkbox" />
            Souhlas se zpracováním osobních údajů
          </label>
          <ErrorMessage name="GDPR" component="p" />
        </div>
        <button type="submit">Odeslat</button>
      </Form>
  
  </Formik>
  )
}

export default RegistrationForm
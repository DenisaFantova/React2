import React from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik';

const validateForm = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Povinné pole';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Musí být dlouhé maximálně 15 znaků';
  }

  if (!values.lastName) {
    errors.lastName = 'Povinné pole';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Musí být dlouhé maximálně 20 znaků';
  }

  return errors;
}

const FinalRegistration = () => {
  return (

    <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      note: '',
      city: ''
    }}
    validate={validateForm}
    onSubmit={(values, {setSubmitting}) => {
      console.log(values);
      setSubmitting(false);
    }}
    >
      <Form>
        <div>
          <label htmlFor="firstName">Jméno</label>
          <Field name="firstName" type="text"/>
          <ErrorMessage name="firstName" component="p"/>
        </div>
        <div>
          <label htmlFor="lastName">Příjmení</label>
          <Field name="lastName" type="text"/>
          <ErrorMessage name="lastName" component="span"/>
        </div>
        <div>
          <label htmlFor="note">Poznámka</label>
          <Field name="note" as="textarea"/>
          <ErrorMessage name="note" component="p"/>
        </div>
        <div>
          <label htmlFor="city">Město</label>
          <Field name="city" as="select">
            <option value="Praha">Praha</option>
            <option value="Brno">Brno</option>
            <option value="Ostrava">Ostrava</option>
          </Field>
          <ErrorMessage name="city" component="p"/>
        </div>

        <button type="submit">Odeslat</button>
      </Form>
    </Formik>

    // <form onSubmit={formik.handleSubmit}>
    //   <div>
    //     <label htmlFor="firstName">Jméno</label>
    //     <input
    //       type="text"
    //       id="firstName"
    //       name="firstName"
    //       value={formik.values.firstName}
    //       onChange={formik.handleChange}
    //       onBlur={formik.handleBlur}
    //     />
    //     {formik.touched.firstName && formik.errors.firstName && <p>{formik.errors.firstName}</p>}
    //   </div>
    //   <div>
    //   <label htmlFor="lastName">Příjmení</label>
    //     <input
    //       type="text"
    //       id="lastName"
    //       name="lastName"
    //       value={formik.values.lastName}
    //       onChange={formik.handleChange}
    //       onBlur={formik.handleBlur}
    //     />
    //     {formik.touched.lastName && formik.errors.lastName && <p>{formik.errors.lastName}</p>}
    //   </div>
    //   <button type="submit">Odeslat</button>
    // </form>
  );
}

export default FinalRegistration
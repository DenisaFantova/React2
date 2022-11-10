import React from 'react'
import {useFormik} from 'formik';

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

const NewRegistration = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
    },
    onSubmit: (values) => {console.log(values)},
    validate: validateForm
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="firstName">Jméno</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName && <p>{formik.errors.firstName}</p>}
      </div>
      <div>
      <label htmlFor="lastName">Příjmení</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName && <p>{formik.errors.lastName}</p>}
      </div>
      <button type="submit">Odeslat</button>
    </form>
  );
}

export default NewRegistration
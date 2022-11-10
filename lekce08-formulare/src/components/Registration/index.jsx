import React, {useState} from 'react'
import useForm from '../hooks/useForm';

const Registration = () => {
  const {formData, handleChange, handleSubmit} = useForm(
    {
      firstName: '',
      lastName: '',
    },
    (values) => {console.log(values)}
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">Jméno</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
      <label htmlFor="lastName">Příjmení</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Odeslat</button>
    </form>
  );
}

export default Registration
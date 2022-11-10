import {useState} from 'react'


const useForm = (initialValues, onSubmit) => {
  const [formData, setFormData] = useState(initialValues);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, 
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  }

  return {formData, handleChange, handleSubmit};
}

export default useForm;
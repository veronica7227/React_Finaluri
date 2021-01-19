import React, {useState, useEffect } from 'react';

import './Registration.css';

const Registration = () => {
    const intialValues = { email: "", name: "" };
  
    const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
  
  const newLocal = () => {
    console.log(formValues);
  };
    const submit = newLocal;
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmitting(true);
    };
  
    const validate = (values) => {
      let errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  
      if (!values.email) {
        errors.email = "fill the line";
      } else if (!regex.test(values.email)) {
        errors.email = "not correct mail format";
      }
  
      if (!values.name) {
        errors.name = "fill the line";
      } else if (values.name.length < 2) {
        errors.name = "your name must be longer";
      }
      if (!values.age){
        errors.age="fill the line";
      }
  
      return errors;
    };
  
    useEffect(() => {
      if (Object.keys(formErrors).length === 0 && isSubmitting) {
        submit();
      }
    }, [formErrors, isSubmitting, submit]);
  
    return (
      <div className="container">
        {Object.keys(formErrors).length === 0 && isSubmitting && (
          <span className="success-msg">You authorised successfully</span>
        )}
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              onChange={handleChange}
              
            />
            {formErrors.email && (
              <span className="error">{formErrors.email}</span>
            )}
          </div>
  
          <div className="form-row">
            <label htmlFor="name">name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formValues.name}
              onChange={handleChange}
            />
            {formErrors.name && (
              <span className="error">{formErrors.name}</span>
            )}
          </div>

          <div className="form-row">
            <label htmlFor="age">age</label>
            <input
              type="number"
              name="age"
              id="age"
              value={formValues.age}
              onChange={handleChange}
            />
            {formErrors.name && (
              <span className="error">{formErrors.age}</span>
            )}
          </div>
  
          <button type="submit" className="btn">submit</button>
        </form>
      </div>
    );
  };
  
  export default Registration;
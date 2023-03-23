import React from 'react';

const Form = ({ fields, formData, setFormData, handleSubmit }) => {

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };


  return (
    <form className="form-width" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name} className="form-outline mb-4">
          <label className="form-label pl-2" htmlFor={field.id}>{field.label}</label>
          <input
            type={field.type || 'text'}
            name={field.name}
            placeholder={`Enter Your ${field.name}`}
            value={formData[field.name] || ''}
            onChange={handleChange}
            className={field.class}
            checked
          />
        </div>
      ))}
      <button type="submit" className="btn btn-primary btn-block mb-4">
        Sign in
      </button>
    </form>
  );
};

export default Form;












import React, { FC, useState } from "react";

interface FormProps {}

const Form: FC<FormProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/apiv1/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className='form-name'>
        <div className='form-input'>
          <form onSubmit={handleSubmit}>
            <div className='input-tems'>
              <input 
                type='text' 
                name='name' 
                id='name' 
                placeholder='name' 
                onChange={handleChange} 
                value={formData.name}
                required 
              />
            </div>
            <div className='input-tems'>
              <input 
                type='email' 
                name='email' 
                id='email' 
                placeholder='email'
                onChange={handleChange} 
                value={formData.email} 
                required 
              />
            </div>
            <div className='input-btn'>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;

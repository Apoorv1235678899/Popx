import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(form));
    navigate('/account');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Create your PopX account</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md">
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          className="w-full mb-4 px-3 py-2 border rounded"
          name="company"
          placeholder="Company Name"
          value={form.company}
          onChange={handleChange}
        />
        <div className="mb-4">
          <p className="mb-2">Are you an agency?</p>
          <label className="mr-4">
            <input
              type="radio"
              name="isAgency"
              value="yes"
              checked={form.isAgency === 'yes'}
              onChange={handleChange}
            /> Yes
          </label>
          <label>
            <input
              type="radio"
              name="isAgency"
              value="no"
              checked={form.isAgency === 'no'}
              onChange={handleChange}
            /> No
          </label>
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 w-full"
        >
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Register;
'use client';
import React, { useState, FormEvent } from 'react';
import '../styles/global.css'; // Import global styles if needed

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Perform login logic here
    // For example, you could call an API endpoint to authenticate the user
    console.log('Submitting form with values:', { username, email, password, rememberMe });
  };

  return (
    <div className='background-image min-h-screen flex items-center justify-center'>
      <div className='container mx-auto py-8 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h1 className='text-2xl font-bold mb-4 text-center'>Login</h1>
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
              Username
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              name='username'
              placeholder='Username'
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {/* Email Field */}
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='email'
              type='email'
              name='email'
              placeholder='Email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Password Field */}
          <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
              Password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              name='password'
              placeholder='Password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* Sign in Buttons */}
          <div className='flex items-center justify-between'>
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Login
            </button>
          </div>
          {/* Social Sign in Options */}
          <div className='mt-4'>
            <button
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
            >
              Continue with Google
            </button>
          </div>
          <div className='mt-4'>
            <button
              className='bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
            >
              Continue with Apple
            </button>
          </div>
          <div className='mt-4'>
            <button
              className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
            >
              Continue with Phone Number
            </button>
          </div>
          {/* Remember me checkbox */}
          <div className='form-check mt-4'>
            <input
              className='form-checkbox'
              type='checkbox'
              id='rememberMe'
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
              <label className='ml-2 text-gray-700' htmlFor='rememberMe'>Remember me</label>
          </div>
          {/* Registration link */}
          <div className='text-center mt-4'>
            <a className='text-blue-500 hover:text-blue-700' href='/register'>
              Don't have an account? Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Store/UserSlice';
import { useNavigate } from 'react-router-dom';
import Btn from '../Components/Btn';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false)

  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const userCredentials = { username, password };

    try {
      const result = await dispatch(loginUser(userCredentials))
      if (result) {
        setUsername('');
        setPassword('');
        navigate('/');
      }
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    if (accessToken) {
      navigate("/")
    }
  }, [navigate])

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className=" px-12 py-4 shadow-2xl rounded-sm justify-center border-2 border-gray-300 max-w-[1000px]">
        <h1 className='font-bold text-3xl mt-2 mb-4'>Login</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label>
              Username:
              <input
                className="mt-2 flex border-2 border-gray-400  rounded-lg items-center p-2 h-10 w-60"
                type="text"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
          </div>
          
          <div>
            <label className="mt-2 ">
              Password:
              <input
                className="mt-2 flex border-2 border-gray-400 rounded-lg  p-2 h-10 w-60"
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <label className='p-2 '>
            <input type='checkbox'
              className='mt-4 inline-flex '
              checked={showPassword}
              onChange={() => setShowPassword((prev) => (!prev))}>
            </input>
            Show Password
          </label>
          <div className='border-t-2 border-gray-600'>
          <Btn buttonName=
            {loading ? (<div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
              role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>) : 'Login'} />
          </div>
          
          {error && <div>{error}</div>}
        </form>
      </div>
    </div>
  );
};

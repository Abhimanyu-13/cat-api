import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Store/UserSlice';
import { useNavigate } from 'react-router-dom';
import Btn from '../Components/Btn';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      navigate('/');
    }
  }, [navigate]);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = async (values)=> {
    try {
      const result = await dispatch(loginUser(values));
      if (result) {
        navigate('/');
      }
    } catch (err) {
      console.error("Invalid Credentials");
  }
}

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="px-12 py-4 shadow-2xl rounded-sm justify-center border-2 border-gray-300 max-w-[1000px]">
        <h1 className="font-bold text-3xl mt-2 mb-4">Login</h1>
        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit, handleChange, values, errors, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              {errors.general && (
                <div className="text-red-600 text-sm mb-2 font-serif">{errors.general}</div>
              )}
              <div className="mb-4">
                <label>Username</label>
                <Field
                  className="mt-2 flex border-2 border-gray-400 rounded-2xl items-center p-2 h-10 w-60"
                  name="username"
                  required
                  placeholder="Enter Username"
                  onChange={handleChange}
                  value={values.username}
                />
                {errors.username && (
                  <span className="text-red-600 text-sm">{errors.username}</span>
                )}
              </div>
              <div className="mb-4">
                <label>Password</label>
                <Field
                  className="mt-2 flex border-2 border-gray-400 rounded-2xl items-center p-2 h-10 w-60"
                  name="password"
                  required
                  placeholder="Enter Password"
                  type={showPassword ? 'text' : 'password'}
                  onChange={handleChange}
                  value={values.password}
                />
                {errors.password && (
                  <span className="text-red-600 text-sm">{errors.password}</span>
                )}
                <label className="p-2">
                  <input
                    type="checkbox"
                    className="mt-4 inline-flex"
                    checked={showPassword}
                    onChange={() => setShowPassword((prev) => !prev)}
                  />
                  Show Password
                </label>
              </div>
              <div>
                <Btn
                  buttonName={
                    isSubmitting || loading ? (
                      <div
                        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent"
                        role="status"
                        aria-label="Loading..."
                      />
                    ) : (
                      'Login'
                    )
                  }
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

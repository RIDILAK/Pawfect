import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const signUpValidation = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .required('Please Enter Your Name'),
  email: Yup.string()
    .email('Please Enter Valid email')
    .required('Please Enter Email'),
  password: Yup.string()
    .min(5, 'Password must be at least 5 characters')
    .required('Please Enter Password'),
  cpassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Password does not match')
    .required('Please Enter Confirm Password'),
});


const initialValues = {
  name: '',
  email: '',
  password: '',
  cpassword: '',
};

function SignUp() {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState(''); 
  const [isAdmin,setIsAdmin]=useState(false)


  // const checkEmailExists = async (email) => {
  //   try {
  //     const response = await axios.get('http://localhost:3032/users');
  //     const users = response.data;
  //     return users.some((user) => user.email === email);
  //   } catch (error) {
  //     console.error('Error fetching users:', error);
  //     return false;
  //   }
  // };

  return (
    <div className="App flex justify-center items-center min-h-screen bg-fourth">
      <div className="bg-third p-8 rounded-lg shadow-lg w-full max-w-md">
        <Formik
          initialValues={initialValues}
          validationSchema={signUpValidation}
          onSubmit={async (values, { setSubmitting }) => {
            setEmailError(''); 
            
              try {
                
                const response = await axios.post(`${import.meta.env.VITE_BASEURL}/api/User/SignUp`, {
                  name: values.name,
                  email: values.email,
                  password: values.password,
                  // cart: [],
                  // ordres: [],
                  // isLogged:true,
                  // isAdmin:isAdmin
                });

                console.log('User added:', response.data);
                navigate('/signin');
              } catch (error) {
                console.error('Error adding user:', error);
              }
            
          }}
        >
          {({ errors, touched, }) => (
            <Form>
             
              <div className="mb-4">
                <label htmlFor="name" className="block text-primary font-semibold mb-2">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.name && touched.name && (
                  <small className="text-red-500">{errors.name}</small>
                )}
              </div>

             
              <div className="mb-4">
                <label htmlFor="email" className="block text-primary font-semibold mb-2">
                  E-mail
                </label>
                <Field
                  type="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.email && touched.email && (
                  <small className="text-red-500">{errors.email}</small>
                )}
                {emailError && <small className="text-red-500">{emailError}</small>}
              </div>

            
              <div className="mb-4">
                <label htmlFor="password" className="block text-primary font-semibold mb-2">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.password && touched.password && (
                  <small className="text-red-500">{errors.password}</small>
                )}
              </div>

             
              <div className="mb-6">
                <label htmlFor="cpassword" className="block text-primary font-semibold mb-2">
                  Confirm Password
                </label>
                <Field
                  type="password"
                  name="cpassword"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.cpassword && touched.cpassword && (
                  <small className="text-red-500">{errors.cpassword}</small>
                )}
              </div>

           
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              >
                Signup
              </button>

              
              <div className="mt-4 text-center">
                <span className="text-primary">Already have an account? </span>
                <Link to="/signin" className="text-primary hover:underline">
                  Sign In
                </Link>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default SignUp;



import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
       
        axios.get('http://localhost:3032/users')
            .then((res) => {
              
                const foundUser = res.data.find(
                    (user) => user.email === email && user.password === password
                );

                if (foundUser) {
                  
                    if (foundUser.isLogged === false) {
                        Swal.fire({
                            icon: 'error',
                            text: 'Your account is blocked.',
                        });
                        return;
                    }

                    localStorage.setItem('isAdmin', foundUser.isAdmin ? 'true' : 'false'); 
                    localStorage.setItem('userId', foundUser.id); 
                    localStorage.setItem('userName', foundUser.name); 

                    if (foundUser.isAdmin) {
                        
                        Swal.fire({
                            icon: 'success',
                            text: 'Admin login successful!',
                        });
                        navigate('/admin');
                    } else {
                        
                        Swal.fire({
                            icon: 'success',
                            text: 'Successfully logged in',
                        });
                        navigate('/');
                    }
                } else {
                 
                    Swal.fire({
                        icon: 'error',
                        text: 'Invalid email or password',
                    });
                }
            })
            .catch((error) => {
               
                console.error('Error fetching data:', error);
                Swal.fire({
                    icon: 'error',
                    text: 'An error occurred. Please try again.',
                });
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-fourth">
            <div className="bg-third p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-primary text-center mb-6">Sign In</h2>

                <div className="mb-4">
                    <label htmlFor="email" className="block font-medium text-primary mb-2">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your email"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="block font-medium text-primary mb-2">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Enter your password"
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    className="w-full bg-primary text-white py-2 rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    Sign In
                </button>

                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link
                            to="/signup"
                            className="text-primary font-semibold hover:underline"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SignIn;


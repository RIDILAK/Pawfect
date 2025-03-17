import axios from "axios";
import { text } from "framer-motion/client";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .post(`${import.meta.env.VITE_BASEURL}/api/User/loginUser`, {
        email: email,
        password: password,
      })
      .then((res) => {
        // localStorage.setItem('isAdmin', foundUser.isAdmin ? 'true' : 'false');
        // localStorage.setItem('userId', foundUser.id);
        // localStorage.setItem('userName', foundUser.name);

        if (res.status == 200) {
         localStorage.setItem("token",res.data.data)
          if (res.data.message == "Admin") {
            localStorage.setItem('isAdmin',true)
            Swal.fire({
              icon: "success",
              text: "admin login successful!",
            });
            navigate("/admin");
          } else {
            localStorage.setItem('isAdmin',false)
            Swal.fire({ 
              icon: "success",
              text: "Successfully logged in",
            });
            navigate("/");
          }
        }
      })
      .catch((error) => {
        if (error.response?.status === 403) {
            Swal.fire({  
              icon: "error",
              text: "You are blocked by Admin",
            });
            return;
          }
        console.error("Error fetching data:", error);
        Swal.fire({
          icon: "error",
          text: "An error occurred. Please try again.",
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-fourth">
      <div className="bg-third p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-primary text-center mb-6">
          Sign In
        </h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block font-medium text-primary mb-2"
          >
            Email
          </label>
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
          <label
            htmlFor="password"
            className="block font-medium text-primary mb-2"
          >
            Password
          </label>
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
            Don't have an account?{" "}
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

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../components/AuthContext"; // Import useAuth hook
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar"; // Import the LoadingBar component

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loadingProgress, setLoadingProgress] = useState(0); // State to track loading progress

  const navigate = useNavigate();
  const { login } = useAuth(); // Destructure login function

  const togglePasswordVisibility = () => setPasswordShown(!passwordShown);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert('Please fill all the fields');
      return;
    }

    setLoadingProgress(30); // Start the loading bar
    setTimeout(() => {
      alert('Login successful!');
      login(); // Update auth state
      navigate('/home'); // Navigate to home page after successful login
    }, 500); // Simulating a delay for demonstration purposes
  };

  const handleLinkClick = (path) => {
    setLoadingProgress(30); // Start the loading bar
    setTimeout(() => {
      navigate(path); // Navigate to the specified path
    }, 500); // Simulating a delay for demonstration purposes
  };

  return (
    <section className="grid h-screen relative">
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="absolute inset-0 h-full w-full object-cover z-0"
      />
      <LoadingBar color="#ff0000" progress={loadingProgress} onLoaderFinished={() => setLoadingProgress(0)} /> {/* Loading bar component */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-3xl mb-2 text-blue-gray">Sign In</h3>
          <p className="text-gray-600 mb-6 text-lg font-normal">
            Enter your email and password to sign in
          </p>
          <form className="text-left" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="mb-2 block font-medium text-gray-900">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@mail.com"
                className="w-full px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-400 border border-gray-300 rounded-lg"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="mb-2 block font-medium text-gray-900">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="********"
                  className="w-full px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-400 border border-gray-300 rounded-lg pr-12"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center px-3 focus:outline-none"
                >
                  {passwordShown ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M1 10a9 9 0 1118 0 9 9 0 01-18 0zm9-7a7 7 0 00-7 7 1 1 0 102 0 5 5 0 0110 0 1 1 0 102 0 7 7 0 00-7-7z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M2.636 6.364a7 7 0 1014.728 4.728l-1.06-1.06a5 5 0 11-6.248-6.248l-1.06-1.06A7 7 0 002.636 6.364zM9 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <button className="bg-gray-700 text-white py-3 px-6 mt-6 w-full rounded-lg hover:bg-gray-600">
              Sign In
            </button>
            <div className="mt-4 flex justify-end">
              <Link to="/forgotpassword" className="font-medium text-blue-500 hover:text-blue-700" onClick={(e) => {e.preventDefault(); handleLinkClick('/forgotpassword');}}>
                Forgot Password?
              </Link>
            </div>
            <p className="mt-4 text-center text-gray-900 font-normal">
              Not registered?{" "}
              <Link to="/register" className="font-medium text-gray-900" onClick={(e) => {e.preventDefault(); handleLinkClick('/register');}}>
                Create account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;

import React, { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LoadingBar from "react-top-loading-bar"; // Import the LoadingBar component
import { useAuth } from "../components/AuthContext"; // Adjust the import path as necessary

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Get the login function from the AuthContext
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loadingProgress, setLoadingProgress] = useState(0); // State to track loading progress
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState(""); // State to track password matching error
  const images = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Start the loading bar
    setLoadingProgress(30);

    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      // Validate form data
      if (!formData.fullname || !formData.email || !formData.password) {
        alert("Please fill all the fields");
        setLoadingProgress(0); // Reset the loading bar
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        setLoadingProgress(0); // Reset the loading bar
        return;
      }

      // If form data is valid, trigger alert, login, and redirect
      alert("Registration successful!");
      login(); // Call the login function from AuthContext to authenticate the user
      navigate("/home"); // Navigate to home page or any other page
    }, 500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "confirmPassword" || name === "password") {
      if (value !== formData.password && name === "confirmPassword") {
        setPasswordError("Passwords do not match");
      } else {
        setPasswordError("");
      }
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Carousel Section */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Carousel transition={{ duration: 1000 }}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
          ))}
        </Carousel>
      </div>

      {/* Registration Form Section */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center bg-white bg-opacity-80 p-6 rounded-xl shadow-lg w-full max-w-lg">
          <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Sign Up
          </h4>
          <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            Nice to meet you! Enter your details to register.
          </p>
          <form
            className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96"
            onSubmit={handleSubmit}
          >
            <LoadingBar
              color="#ff0000"
              progress={loadingProgress}
              onLoaderFinished={() => setLoadingProgress(0)}
            />
            <div className="flex flex-col gap-6 mb-1">
              <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Your Name
              </h6>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="Fullname"
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
              </div>
              <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Your Email
              </h6>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@mail.com"
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
              </div>
              <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Password
              </h6>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="********"
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
              </div>
              <div className="flex items-center justify-between">
                <h6 className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                  Confirm Password
                </h6>
                {passwordError && (
                  <p className="text-red-500 text-sm">{passwordError}</p>
                )}
              </div>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  type="password" // Corrected input type
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="********"
                  className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                />
              </div>
            </div>
            <div className="flex items-center mt-4 space-x-2">
              <input
                type="checkbox"
                id="remember"
                className="peer h-5 w-5 cursor-pointer appearance-none border border-gray-300 rounded-md checked:bg-gray-900 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              />
              <label
                htmlFor="remember"
                className="text-gray-700 cursor-pointer select-none"
              >
                <span className="font-sans text-sm font-normal leading-normal">
                  I agree to the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </span>
              </label>
            </div>
            <button
              className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
            >
              Sign Up
            </button>
            <p className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
              Already have an account?
              <Link to="/login" className="font-medium text-gray-900">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

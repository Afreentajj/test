import React, { useState } from "react";
import img from "../assets/img/contact.jpg";
import Button from "../layouts/Button";

const Contact = () => {
  const backgroundColor = `bg-brightColor`;
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userMessage: ""
  });

  const { userName, userEmail, userMessage } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName && userEmail && userMessage) {
      // Trigger an alert if all fields are filled
      alert("Form submitted successfully!");
      // Clear form fields
      setFormData({ userName: "", userEmail: "", userMessage: "" });
    } else {
      // Trigger an alert if any field is empty
      alert("Please fill out all fields.");
    }
  };
  

  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">
      <div className=" flex flex-col lg:flex-row justify-between w-full">
        <form
          className=" w-full lg:w-2/5 space-y-5 bg-[#F2F2F2] p-5 rounded-xl"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-semibold text-center">Contact Form</h1>
          <div className=" flex flex-col">
            <label htmlFor="userName">Full Name</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="text"
              name="userName"
              id="userName"
              value={userName}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="userEmail">Email</label>
            <input
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              type="email"
              name="userEmail"
              id="userEmail"
              value={userEmail}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className=" flex flex-col">
            <label htmlFor="userMessage">Message</label>
            <textarea
              className=" py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all"
              name="userMessage"
              id="userMessage"
              value={userMessage}
              onChange={handleChange}
              cols="30"
              rows="3"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <div className="flex flex-row justify-center">
            <Button title="Submit" backgroundColor={backgroundColor} />
          </div>
        </form>
        <div className=" flex flex-col items-center w-full lg:w-2/4 my-5">
          <img className=" rounded-lg" src={img} alt="" />
          <p className=" text-center text-sm pt-4 text-[#898888]">
          We'd love to hear from you! For questions, feedback, or travel assistance, fill out the form below, and we'll get back to you soon.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

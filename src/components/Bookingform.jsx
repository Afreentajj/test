import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  
  const navigate = useNavigate();

  const PER_DAY_PRICE = 728;

  const handleBooking = () => {
    if (name && email && phoneNumber && startDate && endDate && agreedToTerms) {
      const bookingDetails = {
        name,
        email,
        phoneNumber,
        startDate,
        endDate,
        totalPrice,
      };
      navigate('/payment', { state: { bookingDetails } });
    } else {
      alert('Please fill out all fields and agree to the terms and conditions.');
    }
  };

  useEffect(() => {
    const validPhoneNumber = phoneNumber.replace(/[^0-9+]/g, '');
    if (validPhoneNumber !== phoneNumber) {
      setPhoneNumber(validPhoneNumber);
    }
  }, [phoneNumber]);

  useEffect(() => {
    if (startDate && endDate) {
      const dayCount = (endDate - startDate) / (1000 * 60 * 60 * 24) + 1;
      setTotalPrice(dayCount * PER_DAY_PRICE);
    } else {
      setTotalPrice(0);
    }
  }, [startDate, endDate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center justify-center bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
        <h4 className="font-sans text-2xl font-semibold text-blue-gray-900">
          Book Tickets
        </h4>
        <p className="mt-1 font-sans text-base font-normal text-gray-700">
          Enter your details to book tickets.
        </p>
        <form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
          <div className="flex flex-col gap-6 mb-1">
            <h6 className="font-sans text-base font-semibold text-blue-gray-900">
              Your Name
            </h6>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                placeholder="Fullname"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-2 focus:border-gray-900"
              />
            </div>
            <h6 className="font-sans text-base font-semibold text-blue-gray-900">
              Your Email
            </h6>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                placeholder="name@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-2 focus:border-gray-900"
              />
            </div>
            <h6 className="font-sans text-base font-semibold text-blue-gray-900">
              Phone Number
            </h6>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="tel"
                placeholder="Your Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-2 focus:border-gray-900"
              />
            </div>
            <h6 className="font-sans text-base font-semibold text-blue-gray-900">
              Date Range
            </h6>
            <div className="relative h-11 w-full min-w-[200px]">
              <DatePicker
                selected={startDate}
                onChange={(dates) => {
                  const [start, end] = dates;
                  setStartDate(start);
                  setEndDate(end);
                }}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                className="w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-2 focus:border-gray-900"
                placeholderText="Select a date range"
              />
            </div>
            <h6 className="font-sans text-base font-semibold text-blue-gray-900">
              Total Price
            </h6>
            <div className="relative h-11 w-full min-w-[200px]">
              <input
                type="text"
                value={`$${totalPrice}`}
                readOnly
                className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border-blue-gray-200 focus:border-2 focus:border-gray-900"
              />
            </div>
          </div>
          <div className="inline-flex items-center">
            <label className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3" htmlFor="terms">
              <input
                type="checkbox"
                className="peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all checked:border-gray-900 checked:bg-gray-900 hover:before:opacity-10"
                id="terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
              />
              <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </span>
            </label>
            <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="terms">
              <p className="flex items-center text-sm font-normal text-gray-700">
                I agree to the
                <a href="#" className="font-medium transition-colors hover:text-gray-900">
                  &nbsp;Terms and Conditions
                </a>
              </p>
            </label>
          </div>
          <button
            className="mt-6 block w-full rounded-lg bg-gray-900 py-3 px-6 text-center text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-85 focus:shadow-none active:opacity-85 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            onClick={handleBooking}
          >
            Book Tickets
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;

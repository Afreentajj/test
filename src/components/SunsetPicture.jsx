import React, { useState } from 'react';
import sunsetPic from '../assets/img/sunset pic.jpg'; // Import the sunset image
import roamrisePic from '../assets/img/roamrise.png.png'; // Import the roamrise image
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import LoadingBar from "react-top-loading-bar"; // Import the LoadingBar component

const SunsetPicture = () => {
  const navigate = useNavigate(); // Initialize the navigate function from useNavigate
  const [loadingProgress, setLoadingProgress] = useState(0); // State to track loading progress

  const handleRegisterClick = () => {
    setLoadingProgress(30); // Set loading progress to 30%
    setTimeout(() => {
      navigate('/register'); // Navigate to the register page component
    }, 500); // Simulating a delay for demonstration purposes
  };

  const handleLoginClick = () => {
    setLoadingProgress(30); // Set loading progress to 30%
    setTimeout(() => {
      navigate('/login'); // Navigate to the login page component
    }, 500); // Simulating a delay for demonstration purposes
  };

  return (
    <div className="relative flex flex-col justify-center items-center h-screen w-screen overflow-hidden">
      <img src={sunsetPic} alt="Sunset" className="absolute inset-0 w-full h-full object-cover" />
      <LoadingBar color="#ff0000" progress={loadingProgress} onLoaderFinished={() => setLoadingProgress(0)} /> {/* Loading bar component */}
      <div className="absolute flex justify-center items-center h-full w-full">
        <div className="mb-8 flex gap-4">
        <Card className="mt-6 w-96 bg-opacity-80 backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 backdrop-blur-lg backdrop-filter backdrop-blur-3xl">

            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={roamrisePic}
                alt="card-image"
                className="w-full h-full object-cover rounded-lg "
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Take only memories, leave only footprints. 
              </Typography>
              <Typography>
                Embark on a journey of discovery with Roam Rise, where we curate immersive experiences, uncover hidden gems, and connect you with the world's most breathtaking destinations.
              </Typography>
            </CardBody>
            <CardFooter className="flex justify-center gap-4">
              <Button onClick={handleRegisterClick}>Register</Button>
              <Button onClick={handleLoginClick}>Login</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SunsetPicture;

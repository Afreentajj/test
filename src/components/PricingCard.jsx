import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

const PricingCard = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/booking');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card color="black" variant="gradient" className="w-full max-w-[20rem] p-8" style={{ backgroundColor: '#CCCCCC' }}>
        <CardHeader
          floated={false}
          shadow={false}
          color="black"
          className="m-0 mb-8 rounded-none border-b border-black/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="black"
            className="font-normal uppercase"
            style={{ fontFamily: 'Poppins' }}
          >
            standard
          </Typography>
          <Typography
            variant="h1"
            color="black"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl">$</span>728{" "}
            <span className="self-end text-4xl">/day</span>
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-black/20 bg-black/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">3 meals per day</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-black/20 bg-black/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">Vehicles provided</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-black/20 bg-black/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">40+ insights</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-black/20 bg-black/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">Luxury hotels and bedrooms</Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-black/20 bg-black/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">
                Innovative experience
              </Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-5">
          <Button
            size="lg"
            color="black"
            className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={false}
            fullWidth={true}
            style={{ padding: '12px 24px' }}
            onClick={handleBookNow}
          >
            Book Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default PricingCard;

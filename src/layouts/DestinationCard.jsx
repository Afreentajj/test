import React from "react";
import { Link } from "react-router-dom";
import Button from "../layouts/Button";

const DestinationCard = (props) => {
  const backgroundColor = `bg-brightColor`;

  return (
    <div className="w-full lg:w-2/6 cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <img className="rounded-t-lg" src={props.img} alt="img" />

      <div className="bg-[#F2F2F2] p-5 space-y-3 rounded-b-lg">
        <h2 className="text-xl font-medium text-center">{props.title}</h2>
        <p className="text-sm">{props.para}</p>
        <div className="flex flex-row justify-center">
          {/* <Link to="/booking">
            <Button title="Book Tickets" backgroundColor={backgroundColor} />
          </Link> */}
          {/* Update the Link to point to the PricingCard component */}
          <Link to="/PricingCard">
            <Button title="Package" backgroundColor={backgroundColor} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;

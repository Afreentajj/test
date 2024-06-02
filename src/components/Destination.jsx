import React from "react";
import img1 from "../assets/img/dest1.jpg";
import img2 from "../assets/img/dest2.jpg";
import img3 from "../assets/img/dest3.jpg";
import img4 from "../assets/img/switz.jpg";
import img5 from "../assets/img/saudi.jpg";
import img6 from "../assets/img/greece.jpg";
import img7 from "../assets/img/tokyo.jpg";

import DestinationCard from "../layouts/DestinationCard"; // Correct import path

const Destination = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center md:mx-32 mx-1">
      <h1 className="font-medium text-center text-4xl lg:mt-5 mt-16">
        Most Popular Destinations
      </h1>

      <div className="flex flex-col lg:flex-row gap-5 mt-14 shadow-md hover:shadow-lg transition-shadow duration-300">
        <DestinationCard
          img={img1}
          title="Paris, France"
          para="Paris offers iconic landmarks like the Eiffel Tower and world-class art at the Louvre Museum."
          className="h-full" // Added class name to ensure full height
        />
        <DestinationCard
          img={img2}
          title="Dubai, UAE"
          para="A city of superlatives, Dubai boasts towering skyscrapers and desert adventures."
          className="h-full" // Added class name to ensure full height
        />
        <DestinationCard
          img={img3}
          title="Venice, Italy"
          para="Explore the romantic canals and historic architecture of Venice, a city built on water."
          className="h-full" // Added class name to ensure full height
        />
        <DestinationCard
          img={img4}
          title="Bern, Switzerland"
          para="Explore the romantic canals and historic architecture of Venice, a city built on water."
          className="h-full" // Added class name to ensure full height
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-5 mt-14">
        <DestinationCard
          img={img5}
          title="Al ula, Saudi arabia"
          para="Explore the romantic canals and historic architecture of Venice, a city built on water."
          className="h-full" // Added class name to ensure full height
        />
        <DestinationCard
          img={img6}
          title="greece, Switzerland"
          para="Explore the romantic canals and historic architecture of Venice, a city built on water."
          className="h-full" // Added class name to ensure full height
        />
        <DestinationCard
          img={img7}
          title="tokyo, Japan"
          para="Explore the romantic canals and historic architecture of Venice, a city built on water."
          className="h-full" // Added class name to ensure full height
        />
        <DestinationCard
          img={img7}
          title="tokyo, Japan"
          para="Explore the romantic canals and historic architecture of Venice, a city built on water."
          className="h-full" // Added class name to ensure full height
        />
      </div>
    </div>
  );
};

export default Destination;

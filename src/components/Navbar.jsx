import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import LoadingBar from "react-top-loading-bar";
import { useAuth } from "../components/AuthContext";
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { PowerIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0); // State for loading progress
  const ref = useRef(null);
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleChange = () => {
    setMenu(!menu);
  };

  const handleLinkClick = (path) => {
    ref.current.continuousStart();
    setTimeout(() => {
      ref.current.complete();
      navigate(path);
    }, 500);
  };

  const handleLogout = () => {
    setLoadingProgress(30); // Start the loading bar
    setTimeout(() => {
      logout();
      navigate('/login'); // Navigate to the login page after logout
    }, 500); // Simulating a delay for demonstration purposes
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div>
      <LoadingBar color="red" ref={ref} />
      <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-darkBackground text-white">
        <div className="flex items-center">
          <Link to="/" className="font-semibold text-xl cursor-pointer">
            RoamRise
          </Link>
        </div>
        <nav className="hidden lg:flex flex-row items-center gap-6">
          <span
            onClick={() => handleLinkClick("/home")}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Home
          </span>
          <span
            onClick={() => handleLinkClick("/features")}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Features
          </span>
          <span
            onClick={() => handleLinkClick("/destination")}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Destination
          </span>
          <span
            onClick={() => handleLinkClick("/about")}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            About
          </span>
          <span
            onClick={() => handleLinkClick("/contact")}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Contact
          </span>
        </nav>

        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-darkBackground text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <span
            onClick={() => handleLinkClick("/home")}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Home
          </span>
          <span
            onClick={() => handleLinkClick("/features")}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Features
          </span>
          <span
            onClick={() => handleLinkClick("/destination")}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Destination
          </span>
          <span
            onClick={() => handleLinkClick("/about")}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            About
          </span>
          <span
            onClick={() => handleLinkClick("/contact")}
            className="hover:text-brightColor transition-all cursor-pointer"
          >
            Contact
          </span>
        </div>
        

        <div className="hidden lg:flex flex-row items-center gap-4">
  {isAuthenticated && (
    <>
      <LoadingBar color="red" ref={ref} /> {/* Move LoadingBar here */}
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
  {isAuthenticated && (
    <>
      <LoadingBar color="red" ref={ref} /> {/* Move LoadingBar here */}
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center rounded-full p-0"
        >
          <Avatar
            variant="circular"
            size="sm" // Set size to small
            alt="user avatar"
            withBorder={true}
            color="blue-gray"
            className="w-8 h-8" // Ensure the avatar is small and rounded
            src="https://docs.material-tailwind.com/img/face-2.jpg"
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        <MenuItem
          onClick={() => {
            closeMenu();
            handleLogout();
          }}
          className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
        >
          <PowerIcon className="h-4 w-4 text-red-500" strokeWidth={2} />
          <Typography
            as="span"
            variant="small"
            className="font-normal"
            color="red"
          >
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </>
  )}
</Menu>
    </>
  )}
</div>


        <div className="lg:hidden flex items-center p-2" onClick={handleChange}>
          <AiOutlineMenu size={25} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

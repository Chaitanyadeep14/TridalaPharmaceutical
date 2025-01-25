import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./../assets/logo.png";

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Hook to get the current location
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        setIsOpen(false);
    };

    // Common styles for the links
    const titleStyle = "hover:underline text-[#136A62] font-medium text-xl xl:text-[20px]";
    // Style for the active link
    const activeStyle = "font-bold underline text-[#0F4D48]";

    // Links configuration
    const links = [
        { path: "/", label: "Home" },
        { path: "/Products", label: "Products" },
        { path: "/Team", label: "Team" },
        { path: "/Purpose", label: "Purpose" },
        { path: "/Events", label: "Events" },
        { path: "/HealthTips", label: "Health Tips" },
    ];

    return (
        <div className="font-lato bg-gradient-to-r from-[#E1EFF5] to-[#E1EFF5] text-[#218275] px-4 md:px-10 sticky top-0 z-10">
            <nav className="flex justify-between items-center px-4 py-2">
                {/* Logo */}
                <div className="text-2xl font-bold flex items-center">
                    <Link to={'/'}>
                        <img
                            src={logo}
                            alt="Tridala Logo"
                            className="inline-block h-12 md:h-14 xl:h-16 ml-2 md:ml-4 xl:ml-16"
                        />
                    </Link>
                </div>
                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8 xl:space-x-20 text-[#218275]">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`${titleStyle} ${location.pathname === link.path ? activeStyle : ""
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                {/* Hamburger Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={
                                    isOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16m-7 6h7"
                                }
                            ></path>
                        </svg>
                    </button>
                </div>
            </nav>
            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 mt-4 bg- w-full">
                    {links.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={closeMenu}
                            className={`hover:underline ${location.pathname === link.path ? activeStyle : ""
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Nav;
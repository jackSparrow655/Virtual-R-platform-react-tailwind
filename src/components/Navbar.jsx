import {Menu, X} from "lucide-react"
import { useState } from "react";
import React from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import Button from "../small-components/Button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    function toggleNavbar(){
        setIsOpen(!isOpen)
    }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex items-center justify-between">
          <div className="flex item-center flex-shrink-0">
            <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
            <span className="text-xl tracking-tight flex items-center">
              virtualR
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Button content={"Sign In"} isHighlight={false} />
            <Button content={"Create an Account"} isHighlight={true} />
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} >
                {isOpen? <X /> : <Menu/>}
            </button>
        </div>
        </div>
        {
            isOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item, index) => (
                            <li className="py-4" key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex gap-4">
                        <Button content={"Sign In"} isHighlight={false} />
                        <Button content={"Create an Account"} isHighlight={true} />
                    </div>
                </div>
            )
        }
      </div>
    </nav>
  );
};

export default Navbar;

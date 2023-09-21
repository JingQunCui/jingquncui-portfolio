import Link from "next/link";
import React, { useState } from "react";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import Logo from "./Logo";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10">
      <div className="w-full flex justify-between items-center">
        <nav className="flex items-center justify-center">
          <motion.a
            href="https://twitter.com/chatterfloo"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <TwitterIcon/>
          </motion.a>
          
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com/chatterfloo"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            <TwitterIcon/>
          </motion.a>

          <motion.a
            href="https://github.com/JingQunCui"
            target={"_blank"}
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon/>
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/jingqun-cui-775819246/"
            target={"_blank"}
            className="w-6 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon/>
          </motion.a>

          <button onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`w-6 h-6 ml-3 flex items-center justify-center rounded-full p-1 ease
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
          >
            {mode === "light" ? ( <SunIcon className={"fill-dark"} />) : (
              <MoonIcon className={"fill-dark"} />)}
          </button>
        </nav>
      </div>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
      
    </header>
  );
};

export default NavBar;

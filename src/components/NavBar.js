import Link from "next/link";
import React from "react";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
} from "./Icons";
import { motion } from "framer-motion";

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10">
      <div className="w-full flex justify-between items-center">
        <nav className="flex items-center justify-center">
          <Link href="/" className="mr-4">Home</Link>
          <Link href="/about" className="mx-4">About</Link>
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://www.linkedin.com/in/jesse-cui-775819246/"
            target={"_blank"}
            className="w-6 mx-6"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon/>
          </motion.a>

          <motion.a
            href="https://github.com/JingQunCui"
            target={"_blank"}
            className="w-6 mr-6"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon/>
          </motion.a>

          <motion.a
            href="https://twitter.com/chatterfloo"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-6"
          >
            <TwitterIcon/>
          </motion.a>

        </nav>
      </div>
    </header>
  );
};

export default NavBar;

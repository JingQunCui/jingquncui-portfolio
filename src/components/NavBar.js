import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  SunIcon,
  MoonIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`
          h-[1px] inline-block  bg-dark
          absolute left-0 -bottom-0.5
          group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : "w-0"}
          dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

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
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/articles" title="Articles" className="ml-4" />
          
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
    </header>
  );
};

export default NavBar;

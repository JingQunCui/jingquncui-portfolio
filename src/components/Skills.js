import React from "react";
import {
  Python
} from "./Icons";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center mb-20">Skills</h2>
      <div>
        <nav className="flex items-center justify-center flex-wrap">
          <motion.a className="w-10 mx-10 rounded-full text-center">
            <div className="d-flex flex-column align-items-center">
              <Python/>
              <p>Python</p>
            </div>
          </motion.a>
          <motion.a
            className="w-10 mx-10 bg-light rounded-full sm:mx-1"
          >
            <Python/>
          </motion.a>
          <motion.a
            className="w-10 mx-10 bg-light rounded-full sm:mx-1"
          >
            <Python/>
          </motion.a>
        </nav>

      </div>
    </>
  );
};

export default Skills;

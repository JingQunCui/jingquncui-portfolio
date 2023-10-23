import React from "react";
import {
  Python,
  C,
  Java,
  Js,
  Rct,
  SQL,
  Html,
  Css,
  Node,
  Docker,
  Linux,
  Git,
  Unity,
  Postgres,
  Vscode
} from "./Icons";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center mb-28">Skills</h2>
      <div>
        <nav className="flex items-center justify-center flex-wrap my-32">
          <motion.a className="w-10 mx-28 rounded-full text-center">
            <div className="d-flex flex-column align-items-center">
              <Python/>
              <p>Python</p>
            </div>
          </motion.a>
          <motion.a className="w-10 mx-28 rounded-full text-center">
            <div className="d-flex flex-column align-items-center">
              <C/>
              <p>C/C++</p>
            </div>
          </motion.a>
          <motion.a className="w-10 mx-28 rounded-full text-center">
            <div className="d-flex flex-column align-items-center">
              <Java/>
              <p>Java</p>
            </div>
          </motion.a>
          <motion.a className="w-10 mx-28 rounded-full text-center">
            <div className="d-flex flex-column align-items-center">
              <Js/>
              <p>JS</p>
            </div>
          </motion.a>
          <motion.a className="w-10 mx-28 rounded-full text-center">
            <div className="d-flex flex-column align-items-center">
              <Rct/>
              <p>React</p>
            </div>
          </motion.a>
        </nav>
        <nav className="flex items-center justify-center flex-wrap my-32">
          <motion.a className="w-10 mx-28 rounded-full text-center">
            <div className="d-flex flex-column align-items-center">
              <Html/>
              <p>Html</p>
            </div>
          </motion.a>
          <motion.a className="w-10 mx-28 rounded-full text-center">
            <div className="d-flex flex-column align-items-center">
              <Css/>
              <p>Css</p>
            </div>
          </motion.a>
          <motion.a className="w-10 mx-28 rounded-full text-center">
            <div className="d-flex flex-column align-items-center">
              <Node/>
              <p>Node</p>
            </div>
          </motion.a>
          <motion.a className="w-10 mx-28 rounded-full text-center">
            <div className="d-flex flex-column align-items-center">
              <SQL/>
              <p>SQL</p>
            </div>
          </motion.a>
          <motion.a className="w-10 mx-28 rounded-full text-center">
            <div className="d-flex flex-column align-items-center">
              <Docker/>
              <p>Docker</p>
            </div>
          </motion.a>
        </nav>
        <nav className="flex items-center justify-center flex-wrap my-32">
          <motion.a className="w-10 mx-28 rounded-full text-center">
            <div className="d-flex flex-column align-items-center">
              <Linux/>
              <p>Linux</p>
            </div>
          </motion.a>
          <motion.a className="w-10 mx-28 rounded-full text-center">
            <div className="d-flex flex-column align-items-center">
              <Postgres/>
              <p>Postgre</p>
            </div>
          </motion.a>
          <motion.a className="w-10 mx-28 rounded-full text-center">
            <div className="d-flex flex-column align-items-center">
              <Vscode/>
              <p>VS</p>
            </div>
          </motion.a>
          <motion.a className="w-10 mx-28 rounded-full text-center">
            <div className="d-flex flex-column align-items-center">
              <Unity/>
              <p>Unity</p>
            </div>
          </motion.a>
          <motion.a className="w-10 mx-28 rounded-full text-center">
            <div className="d-flex flex-column align-items-center">
              <Git/>
              <p>Git</p>
            </div>
          </motion.a>
        </nav>
      </div>
    </>
  );
};

export default Skills;

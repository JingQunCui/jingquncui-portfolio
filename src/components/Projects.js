import React, { useRef } from "react";
import {motion, useScroll } from "framer-motion"
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, work }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      
      <LiIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Projects = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center">
          Projects
        </h2>

        <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

        <motion.div style={{scaleY: scrollYProgress}}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark dark:shadow-3xl"/>

        <ul className="w-full flex flex-col items-start justify-center ml-4">
            <Details
              position="RCOS: LEGUP"
              company="Github"
              companyLink="https://github.com/Bram-Hub/LEGUP"
              time="Open source project (Java, Swing)"
              work="Implemented front end features using Java and Swing"
            />

            <Details
              position="RCOS: Excalendar"
              company="Github"
              companyLink="https://github.com/GregWith2Gs/Exalendar-React"
              time="Open source project (Html, Css, Javascript, SQL)"
              work="Worked on a team responsible for developing a new mobile app
              feature that allowed users to create and share short-form video
              content, including designing and implementing a new user interface
              and developing the backend infrastructure to support the feature."
            />
        </ul>
      </div>
    </div>
  );
};

export default Projects;

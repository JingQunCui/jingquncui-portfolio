import React, { useRef } from "react";
import {motion} from "framer-motion"
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
              className="text-primaryDark capitalize"
            >
              @{company}
            </a>
          </h3>
          <span className="capitalize font-medium dark/75 text-light/75">
            {time} | {address}
          </span>
          <p className="font-medium w-full">{work}</p>
        </motion.div>
      </li>
    );
};

const Experience = () => {
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div className="absolute left-9 top-0 w-[4px] h-full origin-top bg-primaryDark shadow-3xl"/>
          <ul className="w-full flex flex-col items-start justify-between ml-4">
            <Details
              position="Software Developer"
              company="RCOS ACMAS"
              companyLink="https://github.com/ACMAS/ACMAS-Frontend"
              time="Fall 2023"
              address="Troy, NY | Open-Source"
              work="Implemented OCR functionality, database operations, content storage and retrieval, and improved search engine optimizations. Further revamped the database model to align more effectively with the OCR and search engine functionalities, creating a more streamlined and efficient system."
            />
            
            <Details
              position="Web Design Intern"
              company="Kuumba Health LLC"
              time="Summer 2023"
              address="Remote"
              work="Designed and deployed a new landing page through convertkit theme with HTML and CSS extension. Integrated new SEO optimization resulting in ~27% increased unique visitors. Acted as intern team lead to oversee project planning and task management."
            />

            <Details
              position="Front-End Developer"
              company="RCOS Exalendar"
              companyLink="https://github.com/NatSR4/Exalendar"
              time="Spring 2023"
              address="Troy, NY"
              work="Developed a novel login page as a replacement for the former vanilla Javascript model, accomplished through the use of React, Node, Express, and Tailwind. "
            />

            <Details
              position="Software Developer"
              company="RCOS LEGUP"
              companyLink="https://github.com/Bram-Hub/LEGUP"
              time="Summer 2022"
              address="Troy, NY"
              work="Improved UI/UX by leveraging Javaswing while incorporating new UI capability such as XML file discover and opening. Addressed more than 30 bugs to ensure a smooth and error-free user experience."
            />
          </ul>
      </div>
    </div>
  );
};

export default Experience;

import React, { useRef } from "react";
import {motion, useScroll } from "framer-motion"
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
              position="Web Design Intern"
              company="Kuumba Health LLC"
              companyLink="https://linktr.ee/kuumbahealth"
              time="Summer 2023"
              address="Remote"
              work="Implemented website modernization initiatives to enhance the overall user experience and integrate SEO optimization, resulting in ~37% surge in website traffic from unique visitors. Utilized Html, Css modifications to "
            />

            <Details
              position="Web Design Intern"
              company="Kuumba Health LLC"
              companyLink="https://linktr.ee/kuumbahealth"
              time="Summer 2023"
              address="Remote"
              work="Implemented website modernization initiatives to enhance the overall user experience and integrate SEO optimization, resulting in ~37% surge in website traffic from unique visitors. Utilized Html, Css modifications to "
            />

            <Details
              position="Web Design Intern"
              company="Kuumba Health LLC"
              companyLink="https://linktr.ee/kuumbahealth"
              time="Summer 2023"
              address="Remote"
              work="Implemented website modernization initiatives to enhance the overall user experience and integrate SEO optimization, resulting in ~37% surge in website traffic from unique visitors. Utilized Html, Css modifications to "
            />

            <Details
              position="Web Design Intern"
              company="Kuumba Health LLC"
              companyLink="https://linktr.ee/kuumbahealth"
              time="Summer 2023"
              address="Remote"
              work="Implemented website modernization initiatives to enhance the overall user experience and integrate SEO optimization, resulting in ~37% surge in website traffic from unique visitors. Utilized Html, Css modifications to "
            />

            <Details
              position="Web Design Intern"
              company="Kuumba Health LLC"
              companyLink="https://linktr.ee/kuumbahealth"
              time="Summer 2023"
              address="Remote"
              work="Implemented website modernization initiatives to enhance the overall user experience and integrate SEO optimization, resulting in ~37% surge in website traffic from unique visitors. Utilized Html, Css modifications to "
            />
          </ul>
      </div>
    </div>
  );
};

export default Experience;

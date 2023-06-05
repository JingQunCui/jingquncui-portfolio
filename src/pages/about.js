import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
      <title>About Page</title>
        <meta name="description" content="" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Biography"
            className="mb-16 !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className=" w-full sm:gap-8">
            <div className="w-full flex flex-col px-96 xl:col-span-4 xl:px-32 md:order-2 md:col-span-8 md:px-40 sm:px-0">
              <p className="font-medium">
                Hello, my name is Jing Cui and I am a Junior undergraduate student at RPI. 
                As a student majoring in computer science, I have always been 
                fascinated by the power of technology to transform the world we live 
                in. From a young age, I have been captivated by the endless possibilities 
                of programming and software engineering, and have spent countless 
                hours developing my skills in these areas.
              </p>
                
              <p className="my-4 font-medium">
                During my studies, I had the opportunity to work on a variety of projects
                that have allowed me to gain experience in both software engineering and data
                science. In addition to my personal projects, I also had the opportunity to work 
                in open source projects under great professors whom gave many great insights and guidance
                along the way, and allowed me to develope strong communication and teamwork skills. 
              </p>

              <p className="font-medium">
                Whether I&apos;m working on a website, mobile app, or other digital
                product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>
          </div>

          <Experience />
          <Projects />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;

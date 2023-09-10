import AnimatedText from '@/components/AnimatedText';
import { LinkArrow } from '@/components/Icons';
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import profilePic from "../../public/images/profile/profilepic.jpg";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { useInView, useMotionValue, useSpring } from "framer-motion";
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
      <main className="flex w-full flex-col items-center justify-center dark:text-light" id="about">
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

export default function Home() {
  return (
    <>
      <Head>
      <title>Portfolio - Jing Qun Cui</title>
        <meta
          name="description"
          content=""
        />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light sm:items-start'>
        <Layout className='pt-0 md:pt-16 sm:pt-16'>
          
           <div className="flex items-center justify-between w-full lg:flex-col">
               <div className='w-5/12 md:w-full'>
                <Image src={profilePic} alt="CodeBucks" className='w-full h-auto lg:hidden md:inline-block md:w-full'
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                 />
               </div>
               <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
                <AnimatedText text="The best way to predict the future is to invent it" className='!text-6xl !text-left 
                xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl
                '/>
                <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                Aspiring software engineer and data analyst in training. Explore my latest projects showcasing my expertise in software and web development 
                </p>
                <div className='flex items-center self-start mt-2 lg:self-center'>
                  <Link href="/Resume - Jing Qun Cui 2023.pdf" target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  "
                  download={true}
                  >Resume <LinkArrow className={"w-6 ml-1"}/>
                  
                  </Link>
                  <Link href="mailto:jingcui99@gmail.com" target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                  >Contact</Link>
                </div>
               </div>
           </div>
        </Layout>
      </main>

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16" id="about">
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
  )
}

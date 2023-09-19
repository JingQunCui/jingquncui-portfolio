import AnimatedText from '@/components/AnimatedText';
import { LinkArrow } from '@/components/Icons';
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import profilePic from "../../public/images/profile/profile1.png";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
      <title>Jesse Cui</title>
        <meta
          name="description"
          content=""
        />
      </Head>

      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0'>
           <div className="flex items-center justify-between w-full">
               <div className='w-1/2 flex flex-col items-center self-center '>
                <AnimatedText text="The best way to predict the future is to invent it" className='!text-6xl !text-left'/>
                <p className='my-4 text-base font-medium'>
                  Aspiring software engineer and data analyst in training. Explore my latest projects showcasing my expertise in software and web development 
                </p>
                <div className='flex items-center self-start mt-2'>
                  <Link href="/Resume - Jing Qun Cui 2023.pdf" target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light" download={true}>
                    Resume <LinkArrow className={"w-6 ml-1"}/>
                  </Link>

                  <Link href="mailto:jingcui99@gmail.com" target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light">
                    Contact
                  </Link>
                </div>
               </div>
               <div className='w-4/12'>
                <Image src={profilePic} alt="JesseCui" className='w-full h-auto rounded-full'
                priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
               </div>
           </div>
        </Layout>
      </main>

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16" id="about">
          <AnimatedText
            text="Biography"
            className="mb-16 !leading-tight"/>
          <div className=" w-full">
            <div className="w-full flex flex-col px-96">
              <p className="font-medium">
              Hello, my name is Andrew, currently a senior at the Rensselaer Polytechnic Institute pursuing a degree in Computer Science. I have a strong interest in product development and a deep passion for leveraging technology to drive positive change. My academic pursuits revolve around software engineering and machine learning. Additionally, I am actively exploring new graduate opportunities for Spring/Summer 2024.
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

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
                <AnimatedText text="Jesse Cui" className='!text-6xl !text-left'/>
                <p className='my-4 text-2xl font-medium'>
                  Interested in new grad SWE positions 
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
                <Image src={profilePic} alt="JesseCui" className='w-full h-auto rounded-3xl'
                priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" />
              </div>
           </div>
        </Layout>
      </main>

    </>
  )
}

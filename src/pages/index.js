import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
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
           <div className="flex items-center w-full">
              <div className='w-full flex flex-col items-center self-center '>
                <AnimatedText text="Hi, my name is..." className='!text-xs !text-left'/>
                <AnimatedText text="Jesse Cui" className='!text-6xl !text-left'/>

                <p className='my-4 text-xs font-medium'>
                  Hi, my name is... 
                </p>
                <div className='flex items-center self-start mt-2'>
                  <Link href="/Resume - Jing Qun Cui 2023.pdf" target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light" download={true}>
                    Resume
                  </Link>

                  <Link href="mailto:jingcui99@gmail.com" target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light">
                    Contact
                  </Link>
                </div>
               </div>
           </div>
        </Layout>
      </main>
    </>
  )
}

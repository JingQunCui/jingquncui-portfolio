import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link';
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
      <title>Justin Cui</title>
        <meta
          name="description"
          content=""
        />
      </Head>

      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0'>
           <div className="flex items-center w-full">
              <div className='w-full flex flex-col items-center self-center '>
                <AnimatedText text="Hi, my name is..." className='!text-sm !text-left' color="white"/>
                <AnimatedText text="Justin Cui" className='item center !text-9xl !text-left' color="lightBlue" paddingLeft="20px"/>
                <AnimatedText text="Software engineer who is committed to creating impactful solutions through technology." className='item center !text-2xl !text-left' color="white" paddingLeft="40px"/>

                <div className='flex items-end self-start mt-2'>
                  <Link href="mailto:jingcui99@gmail.com" target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light" download={true}>
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

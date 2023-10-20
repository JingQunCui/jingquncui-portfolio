import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/headshot.jpg";

const about = () => {
    return (
      <>
        <Head>
        <title>About Me</title>
          <meta name="description" content="About Me" />
        </Head>

        <main className="flex w-full flex-col items-center justify-center dark:text-light">
          <Layout className="pt-16">
            <AnimatedText
              text="About Me"
              className="mb-16 !leading-tight"
              color="white"
            />
            <div className="grid w-full grid-cols-8 gap-16">
              <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                  Biography
                </h2>
                <p className="font-medium">
                  Hi, my name is Jesse Cui. I am a rising fourth year at the Rensselaer Polytechnic Institute studying Computer Science.
                  
                </p>
              </div>
  
              <div className="col-span-5 relative h-max rounded-2xl border-2 border-solid border-darkbg-light p-8 dark:bg-dark dark:border-light">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                    <Image
                    src={profilePic}
                    alt="Jesse Cui"
                    className="w-full h-auto rounded-2xl"
                    priority
                    sizes="(max-width: 2000px) 100vw,
                    (max-width: 2000px) 50vw,
                    33vw"
                    />
              </div>
            </div>
  
            <Skills/>
            <Experience />
            <Education />
          </Layout>
        </main>
      </>
    );
  };
  
  export default about;
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
                <h2 className="mt-10 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                  Biography
                </h2>
                <p className="mt-10 font-medium">
                Hello, I&apos;m Jing Qun Cui, also known as Justin Cui. I&apos;m currently a fourth-year student at Rensselaer Polytechnic Institute, majoring in Computer Science. My academic pursuits primarily revolve around software engineering and machine learning. I take pride in my strong organizational skills, unwavering dedication, and ability to excel in high-pressure situations.
                </p>

                <p className="my-6 font-medium">
                I&apos;m actively on the lookout for new graduate opportunities in Spring/Summer 2024 with a STEM-focused company where I can make a significant impact on society and further develop my own skill set. Feel free to contact me if you want to get in touch.
                </p>
              </div>
  
              <div className="col-span-5 relative h-max rounded-2xl border-2 border-solid border-darkbg-light p-8 dark:bg-dark dark:border-light">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-light" />
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
import Accordian from "@/components/Accordian";
import FeatureSections from "@/components/FeaturesSection";
import GetStartedButton from "@/components/GetStartedButton";
import HomeAvatars from "@/components/HomeAvatars";
import HowToUse from "@/components/HowToUse";
import BlurFade from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import Particles from "@/components/magicui/particles";
import TechStack from "@/components/TechStack";
import { auth } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  let time = 0.25;

  const data = await auth();

  if (data?.user?.email) {
    redirect("/dashboard");
  }

  return (
    <>
      <main className="flex z-10 flex-col bg-black items-center mx-auto md:p-24 px-24 py-10 md:py-4">
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color={"#ffffff"}
          refresh
        />
        <BlurFade
          delay={time * 0.5}
          inView
          className="flex items-center justify-center m-auto"
        >
          <Link
            href={
              "https://peerlist.io/avayyyyyyy/project/opinify--feedback-collection-saas"
            }
          >
            <Image
              src={"/peerlist.png"}
              width={150}
              height={150}
              alt="peerlist"
              className="w-28 h-28 md:h-40 md:w-40"
            />
          </Link>
        </BlurFade>
        <BlurFade
          delay={time * 1}
          inView
          className="flex items-center justify-center"
        >
          <div className="lg:text-6xl md:w-[70vw] text-2xl text-center md:text-5xl w-[80vw] shrink-0 text-white mb-8 ">
            Your Go-To Platform for Instant Feedbacks{" "}
            <span className="text-black">🚀</span>
          </div>
        </BlurFade>
        <BlurFade
          delay={time * 2}
          inView
          className="flex items-center justify-center"
        >
          <p className="md:text-base md:w-[40vw] text-xs font-light text-center text-white mb-8">
            Effortlessly embed feedback forms on your website and access
            detailed, real time insights through our{" "}
            <span className="font-bold">Opinify dashboard</span>.
          </p>
        </BlurFade>
        <BlurFade
          delay={time * 3}
          inView
          className="flex items-center justify-center"
        >
          <GetStartedButton />
          {/* <HomeForm /> */}
        </BlurFade>
        <BlurFade
          delay={time * 4}
          inView
          className=" items-center justify-center flex mb-2"
        >
          <HomeAvatars />
        </BlurFade>
        <BlurFade
          delay={time * 5}
          inView
          className=" items-center justify-center hidden md:flex"
        >
          <div className="relative flex md:max-w-6xl justify-center overflow-hidden">
            <Image
              src="https://utfs.io/f/eaab3c99-701a-4c0c-b2e9-c7c88901dad2-6ie4x0.png"
              alt="hero-section"
              width={1400}
              height={1400}
              className="h-full rounded-xl object-cover w-[1600px]"
              style={{
                maskImage: `linear-gradient(to top, transparent, black 20%)`,
              }}
            />
            <BorderBeam
              className="rounded-md"
              size={250}
              duration={12}
              delay={9}
            />
          </div>
        </BlurFade>

        <BlurFade
          delay={time * 5}
          inView
          className="flex md:hidden items-center justify-center w-[90vw]"
        >
          <Image
            src="https://utfs.io/f/eaab3c99-701a-4c0c-b2e9-c7c88901dad2-6ie4x0.png"
            alt="hero-section"
            width={1400}
            height={1400}
            className="h-full rounded-xl object-cover"
            style={{
              maskImage: `linear-gradient(to top, transparent, black 20%)`,
            }}
          />
          <BorderBeam
            className="rounded-md"
            size={150}
            duration={12}
            delay={9}
          />
        </BlurFade>
        {/* <BlurFade
          delay={time * 1}
          inView
          className=""
        >
          <TechStack />
        </BlurFade> */}
        <BlurFade
          delay={time * 6}
          inView
          className="flex md:hidden items-center justify-center"
        >
          <FeatureSections />
        </BlurFade>
        <BlurFade
          delay={time * 1}
          inView
          className="md:flex hidden  items-center justify-center"
        >
          <FeatureSections />
        </BlurFade>
        <BlurFade delay={time * 1} inView className="flex justify-between">
          <HowToUse />
        </BlurFade>
        <BlurFade
          delay={time * 1}
          inView
          className="flex justify-center md:mb-10 mb-5"
        >
          <Accordian />
        </BlurFade>
        <BlurFade
          delay={time * 1}
          inView
          className="flex justify-center md:mb-10 mb-5"
        >
          <div className="min-w-[75vw] mt-10 flex w-full flex-col items-center justify-center">
            <h1 className="mb-2 text-center text-2xl font-light tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 md:text-3xl ">
              Click Here to Know More About Us.
            </h1>
            <Link href="/about" className="hover:underline text-white">
              <p className="max-w-md text-center mb-2 text-sm text-gray-400 dark:text-gray-400">
                About Page
              </p>
            </Link>
          </div>
        </BlurFade>
      </main>
    </>
  );
}

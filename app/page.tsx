import FeatureSections from "@/components/FeaturesSection";
import GetStartedButton from "@/components/GetStartedButton";
import BlurFade from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import Particles from "@/components/magicui/particles";
import { auth } from "@/lib/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {
  let time = 0.25;

  const data = await auth();

  if (data?.user?.email) {
    redirect("/dashboard");
  }

  console.log("data in server side:", data);

  return (
    <main className="flex  z-10 flex-col items-center mx-auto p-24">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <BlurFade
        delay={time * 1}
        inView
        className="flex items-center justify-center"
      >
        <div className="lg:text-7xl text-3xl text-center md:text-5xl lg:w-[70%] md:w-fit w-[80vw] shrink-0 text-transparent mb-8 bg-clip-text bg-gradient-to-br from-white to-gray-400">
          Your Go-To Platform for Instant Feedbacks{" "}
          <span className="text-black">🚀</span>
        </div>
      </BlurFade>
      <BlurFade
        delay={time * 2}
        inView
        className="flex items-center justify-center"
      >
        <p className="md:text-sm text-xs w-[70vw] text-center text-gray-300 mb-8">
          Effortlessly embed feedback forms on your website and access detailed,
          real time insights through our intuitive dashboard.
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
        className=" items-center justify-center hidden md:flex"
      >
        <div className="relative mb-10 flex md:max-w-6xl justify-center overflow-hidden">
          <Image
            src="https://utfs.io/f/ef29d78a-9311-43a2-a012-89d80136aeb7-6ie4x0.jpg"
            alt="hero-section"
            width={1400}
            height={1400}
            className="h-full rounded-lg object-cover w-[1600px]"
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
        delay={time * 4}
        inView
        className="flex md:hidden items-center justify-center w-[90vw]"
      >
        {/* <div className="relative mb-10 flex md:max-w-6xl justify-center overflow-hidden"> */}
        <Image
          src="https://utfs.io/f/ef29d78a-9311-43a2-a012-89d80136aeb7-6ie4x0.jpg"
          alt="hero-section"
          width={1400}
          height={1400}
          className="h-full rounded-lg object-cover"
          style={{
            maskImage: `linear-gradient(to top, transparent, black 20%)`,
          }}
        />
        {/* </div> */}
      </BlurFade>

      <BlurFade
        delay={time * 5}
        inView
        className="flex items-center justify-center"
      >
        <FeatureSections />
      </BlurFade>
    </main>
  );
}

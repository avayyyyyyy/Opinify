import BlurFade from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  let time = 0.25;

  return (
    <main className="flex min-h-screen z-10 flex-col items-center mx-auto p-24">
      <BlurFade
        delay={time * 1}
        inView
        className="flex items-center justify-center"
      >
        <div className="text-7xl text-center lg:w-[70%] md:w-[85%] text-transparent mb-8 bg-clip-text bg-gradient-to-br from-white to-gray-400">
          Your Go-To Platform for Instant Feedbacks{" "}
          <span className="text-black">🚀</span>
        </div>
      </BlurFade>
      <BlurFade
        delay={time * 2}
        inView
        className="flex items-center justify-center"
      >
        <p className="text-sm w-[70%] text-center text-gray-300 mb-8">
          Effortlessly embed customizable feedback forms on your website and
          access detailed, real-time insights through our intuitive dashboard.
        </p>
      </BlurFade>
      {/* <Button className="">
        Get Started for free <MoveRight size={16} className="ml-2" />
      </Button> */}
      <BlurFade
        delay={time * 3}
        inView
        className="flex items-center justify-center"
      >
        <Button variant={"secondary"} className="mb-8">
          Wishlist 🪄
        </Button>
      </BlurFade>
      <BlurFade
        delay={time * 4}
        inView
        className="flex items-center justify-center"
      >
        <div className="relative flex max-w-6xl justify-center overflow-hidden shadow-white/5 shadow-2xl">
          <Image
            src="https://utfs.io/f/fc83d3be-b350-4562-b326-0819da14bc06-p0nwjn.png"
            alt="hero-section"
            width={1000}
            height={1000}
            className="h-full w-full rounded-lg object-cover md:w-[1300px] border "
            style={{
              maskImage: `linear-gradient(to top, transparent, black 100%)`,
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
    </main>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const Article1 = () => {
  return (
    <div>
      <section className="py-12 px-4 bg-black sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-10 lg:px-8">
          <div className="max-w-3xl mx-auto xl:max-w-4xl">
            <p className="text-sm font-bold tracking-widest text-gray-400 uppercase">
              About Page
            </p>

            <h1 className="text-3xl font-bold text-white mt-7 sm:text-4xl xl:text-5xl">
              What is Opinify.in?
            </h1>
            <p className="text-sm font-normal text-gray-400 mt-7">Aug, 2024</p>

            <div className="mt-10">
              <p className="text-base font-normal leading-7 text-gray-300">
                Welcome to Opinify.in, your go-to solution for effortless and
                efficient feedback collection. In today’s fast-paced digital
                world, understanding user experience and gathering actionable
                insights is crucial for success. Opinify.in is here to simplify
                that process, offering a powerful platform to collect, manage,
                and analyze feedback directly from your website.
              </p>
              <Image
                src="https://utfs.io/f/9e53247a-090e-4b56-ae1e-03c9e4bff653-md47.png"
                className="mx-auto my-8"
                alt="About Hero"
                width={1000}
                height={500}
              />
              <h2 className="mt-12 text-3xl font-bold text-white">
                Our Technology
              </h2>
              <p className="mt-6 text-base font-normal leading-7 text-gray-300">
                Our platform is built with a modern and robust tech stack to
                ensure a seamless and reliable experience:
              </p>
              <ul className="pl-5 mt-6 space-y-1 text-base font-normal leading-7 text-gray-300 list-disc">
                <li>
                  <span className="font-bold text-white">React.js:</span> For
                  building a dynamic and responsive user interface.
                </li>
                <li>
                  <span className="font-bold text-white">Next.js:</span> To
                  offer server-side rendering and static site generation for
                  improved performance and SEO.
                </li>
                <li>
                  <span className="font-bold text-white">TypeScript:</span>{" "}
                  Ensuring type safety and better development experience.
                </li>
                <li>
                  <span className="font-bold text-white">PostgreSQL:</span> A
                  powerful and scalable database to handle your data needs
                  efficiently.
                </li>
                <li>
                  <span className="font-bold text-white">Prisma:</span> For an
                  intuitive and flexible database access layer.
                </li>
                <li>
                  <span className="font-bold text-white">NextAuth:</span> To
                  manage authentication and user sessions securely.
                </li>
              </ul>
              <h2 className="mt-12 text-3xl font-bold text-white">
                Our Mission
              </h2>
              <p className="mt-6 text-base font-normal leading-7 text-gray-300">
                At Opinify.in, we are dedicated to helping businesses and
                developers harness the power of user feedback. Our mission is to
                provide a tool that not only simplifies the feedback collection
                process but also delivers meaningful insights that can drive
                growth and innovation. By leveraging advanced technology and
                user-centric design, we aim to transform the way you engage with
                your audience and improve your offerings.
              </p>
              <blockquote className="pl-5 mt-8 border-l-2 border-white">
                <p className="text-lg italic font-medium text-white">
                  Join the Opinify.in community today and discover how our
                  platform can help you turn user feedback into actionable
                  strategies for success. Experience a new level of insight and
                  efficiency with Opinify.in.
                </p>
              </blockquote>
              <div className="relative mt-16">
                {/* <div className="absolute -inset-2">
                  <div
                    className="w-full h-full mx-auto opacity-30 blur-lg filter"
                    style={{
                      background:
                        "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                    }}
                  ></div>
                </div> */}

                {/* <div className="relative rounded-xl">
                  <Image
                    src="https://www.auraui.com/aiimage/boystudy.png"
                    alt="AuroraUI components"
                    layout="responsive"
                    width={1100}
                    height={800}
                    className="rounded-md"
                  />
                </div> */}
              </div>
              <h2 className="mt-16 text-3xl font-bold text-white">
                Still Something on Your Mind?
              </h2>
              <p className="mt-6 text-base font-normal leading-7 text-gray-300">
                We believe in the power of communication and are always here to
                help. If you have any questions, suggestions, or need further
                assistance, don’t hesitate to reach out. Whether you’re curious
                about how Opinify.in works, need help integrating it into your
                website, or simply want to share your thoughts, we’re all ears.
                Your feedback is as important to us as it is to you.
              </p>
              <blockquote className="pl-5 mt-8 border-l-2 border-white">
                <p className="text-lg italic font-medium text-white/70">
                  Let’s{" "}
                  <Link
                    className="hover:underline text-white"
                    href={"https://x.com/shubhcodes"}
                    target="_"
                  >
                    connect
                  </Link>{" "}
                  and make the most out of your feedback journey with
                  Opinify.in.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Article1;

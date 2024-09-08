import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

const PrivacyPolicy = () => {
  return (
    <div>
      <section className="py-12 px-4 bg-black sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-10 lg:px-8">
          <div className="max-w-3xl mx-auto xl:max-w-4xl">
            <p className="text-sm font-bold tracking-widest text-gray-400 uppercase">
              Privacy Policy
            </p>

            <h1 className="text-3xl font-bold text-white mt-7 sm:text-4xl xl:text-5xl">
              Privacy Policy of Opinify.in
            </h1>
            <p className="text-sm font-normal text-gray-400 mt-7">
              Effective Date:{" "}
              {new Date().toLocaleString("default", { month: "long" })},{" "}
              {new Date().getFullYear()}
            </p>

            <div className="mt-10">
              <p className="text-base font-normal leading-7 text-gray-300">
                At Opinify.in, we prioritize the privacy and security of our
                user&apos;s data. This Privacy Policy outlines how we collect,
                use, and safeguard your personal information when you use our
                platform.
              </p>

              <h2 className="mt-12 text-3xl font-bold text-white">
                Information We Collect
              </h2>
              <p className="mt-6 text-base font-normal leading-7 text-gray-300">
                When you interact with Opinify.in, we may collect various types
                of information:
              </p>
              <ul className="pl-5 mt-6 space-y-1 text-base font-normal leading-7 text-gray-300 list-disc">
                <li>
                  <span className="font-bold text-white">
                    Personal Information:
                  </span>{" "}
                  Information like your name, email address, and contact details
                  when you register or contact us.
                </li>
                <li>
                  <span className="font-bold text-white">Usage Data:</span>{" "}
                  Information related to how you interact with our platform,
                  including pages visited and actions taken.
                </li>
                <li>
                  <span className="font-bold text-white">Cookies:</span> We use
                  cookies to enhance user experience, track usage, and store
                  preferences.
                </li>
              </ul>

              <h2 className="mt-12 text-3xl font-bold text-white">
                How We Use Your Information
              </h2>
              <p className="mt-6 text-base font-normal leading-7 text-gray-300">
                The data we collect is used for the following purposes:
              </p>
              <ul className="pl-5 mt-6 space-y-1 text-base font-normal leading-7 text-gray-300 list-disc">
                <li>
                  To improve our services and ensure a better user experience.
                </li>
                <li>To respond to your queries or support requests.</li>
                <li>
                  To send important updates or promotional content (you can
                  opt-out anytime).
                </li>
              </ul>

              <h2 className="mt-12 text-3xl font-bold text-white">
                Data Security
              </h2>
              <p className="mt-6 text-base font-normal leading-7 text-gray-300">
                We implement a range of security measures to protect your
                personal information from unauthorized access, alteration, or
                disclosure.
              </p>

              <h2 className="mt-12 text-3xl font-bold text-white">
                Your Rights
              </h2>
              <p className="mt-6 text-base font-normal leading-7 text-gray-300">
                You have the right to access, modify, or delete your personal
                information at any time. If you wish to exercise these rights,
                please contact us at jabhi465@gmail.com.
              </p>

              <blockquote className="pl-5 mt-8 border-l-2 border-white">
                <p className="text-lg italic font-medium text-white">
                  We are committed to ensuring your privacy and security. For
                  any questions or concerns regarding this Privacy Policy,
                  please don’t hesitate to reach out.
                </p>
              </blockquote>

              <h2 className="mt-16 text-3xl font-bold text-white">
                Contact Us
              </h2>
              <p className="mt-6 text-base font-normal leading-7 text-gray-300">
                If you have any questions about our Privacy Policy or practices,
                feel free to{" "}
                <Link
                  className="hover:underline text-white"
                  href={"mailto:jabhi465@gmail.com"}
                >
                  contact us
                </Link>
                . We&apos;re always here to help and ensure your privacy is
                protected.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

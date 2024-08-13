"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { toast } from "sonner";

const pricingPlans = [
  {
    name: "Basic",
    description:
      "Get started with essential feedback tools for small businesses.",
    monthlyPrice: "Free",
    link: "https://opinify.com/",
    features: [
      "Limited to 5 projects",
      "Custom feedback forms",
      "No analytics",
      "Limited feedback storage",
      "Integration with popular CRM tools",
      "Standard email support",
    ],
  },
  {
    name: "Pro",
    description:
      "Advanced features and dedicated support for growing enterprises.",
    monthlyPrice: 4999,
    link: "https://opinify.com/",
    features: [
      "Unlimited projects",
      "Everything in Basic plan",
      "Advanced analytics and reporting",
      "Unlimited feedback storage",
      "Customizable integration options",
      "Priority support and training",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="relative w-full overflow-hidden text-center flex flex-col justify-center py-12 text-black lg:px-2 lg:py-12">
      <div className="relative flex flex-col items-center justify-center gap-4">
        {/* <p className="text-red-100 w-fit  bg-red-600 px-2 py-1 text-xs mt-10 mx-auto rounded-full">
          Feature not implemented yet... 🥲
        </p> */}
        <div className="flex w-[80%] flex-col items-start justify-center space-y-4 md:items-center">
          <div className="mb-2 inline-block mx-auto rounded-full bg-zinc-100 px-2 py-[0.20rem] text-xs font-medium uppercase text-zinc-500 dark:bg-zinc-200">
            Pricing
          </div>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl dark:text-gray-200">
            Fair pricing, unfair advantage.
          </p>
          <p className="text-md max-w-xl text-gray-700 md:text-center dark:text-gray-300">
            Get started with Opinify today and take your webite to the next
            level.
          </p>
        </div>
      </div>
      <div className="relative mt-10 mx-auto flex md:max-w-[50vw] max-w-[80vw] flex-col gap-8 lg:flex-row lg:gap-4">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="w-full rounded-xl border-[1px] border-gray-300 p-6 text-left dark:border-gray-600"
          >
            <p className="mb-1 mt-0 text-sm font-medium uppercase text-zinc-200">
              {plan.name}
            </p>
            <p className="my-0 mb-6 text-sm text-gray-400">
              {plan.description}
            </p>
            <div className="mb-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key="price"
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="my-0 text-3xl font-semibold text-gray-900 dark:text-gray-100"
                >
                  {plan.monthlyPrice === "Free" ? (
                    <>
                      <span>₹0</span>
                    </>
                  ) : (
                    <span>₹{plan.monthlyPrice}</span>
                  )}
                  <span className="text-sm font-medium">/month</span>
                </motion.p>
              </AnimatePresence>
              <motion.button
                whileTap={{ scale: 0.985 }}
                onClick={() => {
                  toast.error("Feature not implemented yet... 🥲");
                }}
                className="mt-8 w-full rounded-lg bg-zinc-700 py-2 text-sm font-medium text-white hover:bg-zinc-700/90"
              >
                {plan.monthlyPrice === "Free"
                  ? "Already Basic Member 🥳"
                  : "Buy Pro 🚀"}
              </motion.button>
            </div>
            {plan.features.map((feature, idx) => (
              <div key={idx} className="mb-3 flex items-center gap-2">
                <Check className="text-zinc-400" size={18} />
                <span className="text-sm text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default function PricingPage() {
  return <Pricing />;
}

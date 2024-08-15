import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    value: "item-1",
    question: "What is Opinify?",
    answer:
      "Opinify is a feedback form integration website that is free to use and highly simplified.",
  },
  {
    value: "item-2",
    question: "How can Opinify improve user feedback collection?",
    answer:
      "Opinify improves user feedback collection by providing an easy-to-use and integrate feedback form, making it simple for users to give feedback.",
  },
  {
    value: "item-3",
    question: "What are the key features of Opinify?",
    answer:
      "Key features of Opinify include ease of use, seamless integration, and a simplified interface for collecting feedback from users.",
  },
];

const Accordian = () => {
  return (
    <div>
      <div className="min-w-[75vw] mt-10 flex w-full flex-col items-center justify-center">
        <h1 className="mb-2 text-center text-2xl font-light tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 md:text-3xl ">
          FAQ&apos;s
        </h1>
        <p className="max-w-md text-center text-sm text-gray-400 dark:text-gray-400">
          Some common FAQ&apos;s about Opinify
        </p>
        <Accordion type="single" collapsible className="w-full text-sm ">
          {faqData.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-400">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Accordian;

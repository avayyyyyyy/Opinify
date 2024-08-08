import {
  Palette,
  CloudLightning,
  BarChart,
  Users,
  Bot,
  MonitorSmartphone,
} from "lucide-react";

interface Feature {
  id: number;
  name: string;
  description: string;
  icon: JSX.Element;
}

const iconSize = 18;

const FeaturesData: Feature[] = [
  {
    id: 1,
    name: "Real-time Feedback",
    description:
      "Collect and view feedback in real-time, allowing for immediate insights and actions.",
    icon: <CloudLightning size={iconSize} />,
  },
  {
    id: 2,
    name: "Customizable Surveys",
    description:
      "Create surveys that match your brand's look and feel, with customizable questions and formats.",
    icon: <Palette size={iconSize} />,
  },
  {
    id: 3,
    name: "Detailed Analytics",
    description:
      "Get detailed reports and analytics to understand user feedback and make data-driven decisions.",
    icon: <BarChart size={iconSize} />,
  },
  {
    id: 4,
    name: "Multi-channel Support",
    description:
      "Gather feedback from multiple channels including web, email, and mobile apps.",
    icon: <MonitorSmartphone size={iconSize} />,
  },
  {
    id: 5,
    name: "User Segmentation",
    description:
      "Segment users based on feedback, behavior, and other criteria to tailor your responses.",
    icon: <Users size={iconSize} />,
  },
  {
    id: 6,
    name: "Automated Responses",
    description:
      "Set up automated responses to user feedback to ensure timely engagement and follow-up.",
    icon: <Bot size={iconSize} />,
  },
];

const FeaturesGrid = () => {
  return (
    <div>
      <div className="mt-8 grid w-full grid-cols-2 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {FeaturesData.map((feature) => {
          return (
            <div key={feature.id} className="width-fit text-left">
              <div className="mb-2 w-fit rounded-lg bg-slate-500 p-1 text-center text-white ">
                {feature.icon}
              </div>
              <div className="text-md mb-1 font-semibold text-gray-900 dark:text-gray-100">
                {feature.name}
              </div>
              <div className="font-regular max-w-sm text-xs text-gray-600  dark:text-gray-400">
                {feature.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const FeatureSections = () => {
  return (
    <div className="my-12 flex w-full flex-col items-center justify-center">
      <h1 className="mb-2 max-w-3xl text-center text-2xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400 md:text-3xl ">
        Opinify is not like any other feedback app.
      </h1>
      <p className="max-w-sm text-center text-sm text-gray-600 dark:text-gray-400">
        Opinify is a free to use, and highly customizable feedback integration
        website.
      </p>
      <FeaturesGrid />
    </div>
  );
};

export default FeatureSections;

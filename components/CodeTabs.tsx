"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { funky } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Star, X, Copy, Check } from "lucide-react";

// Theme interfaces
interface Theme {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  border: string;
  hover: string;
}

interface Themes {
  [key: string]: Theme;
}

// Available themes
const themes = {
  solarFlare: {
    primary: "bg-blue-600 text-white",
    secondary: "bg-white",
    accent: "bg-blue-50",
    text: "text-gray-800",
    border: "border-gray-200",
    hover: "hover:bg-blue-700 hover:text-blue-200",
  },
  midnightMystery: {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-800",
    accent: "bg-gray-700",
    text: "text-gray-100",
    border: "border-gray-600",
    hover: "hover:bg-blue-600 hover:text-blue-200",
  },
  jungleJazz: {
    primary: "bg-green-600 text-white",
    secondary: "bg-green-50",
    accent: "bg-green-100",
    text: "text-green-800",
    border: "border-green-300",
    hover: "hover:bg-green-700 hover:text-green-200",
  },
  urbanWhisper: {
    primary: "bg-gray-600 text-white",
    secondary: "bg-gray-100",
    accent: "bg-gray-200",
    text: "text-gray-800",
    border: "border-gray-400",
    hover: "hover:bg-gray-700 hover:text-gray-200",
  },
  cottonCandyDreams: {
    primary: "bg-pink-400 text-white",
    secondary: "bg-pink-50",
    accent: "bg-pink-100",
    text: "text-pink-800",
    border: "border-pink-300",
    hover: "hover:bg-pink-500 hover:text-pink-200",
  },
  lavaLampLounger: {
    primary: "bg-red-600 text-white",
    secondary: "bg-red-50",
    accent: "bg-red-100",
    text: "text-red-800",
    border: "border-red-300",
    hover: "hover:bg-red-700 hover:text-red-200",
  },
  coralReefRave: {
    primary: "bg-teal-500 text-white",
    secondary: "bg-teal-50",
    accent: "bg-teal-100",
    text: "text-teal-900",
    border: "border-teal-300",
    hover: "hover:bg-teal-600 hover:text-teal-200",
  },
  tangerineTwist: {
    primary: "bg-orange-500 text-white",
    secondary: "bg-orange-50",
    accent: "bg-orange-100",
    text: "text-orange-900",
    border: "border-orange-300",
    hover: "hover:bg-orange-600 hover:text-orange-200",
  },
  galaxyGlitter: {
    primary: "bg-purple-500 text-white",
    secondary: "bg-purple-50",
    accent: "bg-purple-100",
    text: "text-purple-900",
    border: "border-purple-300",
    hover: "hover:bg-purple-600 hover:text-purple-200",
  },
  velvetVortex: {
    primary: "bg-indigo-600 text-white",
    secondary: "bg-indigo-50",
    accent: "bg-indigo-100",
    text: "text-indigo-900",
    border: "border-indigo-300",
    hover: "hover:bg-indigo-700 hover:text-indigo-200",
  },
};

// Clipboard copy component
interface CopyToClipboardProps {
  codeString: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ codeString }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(codeString);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Button onClick={copyToClipboard} variant="outline" size="sm">
      {isCopied ? (
        <>
          <Check className="mr-2 h-4 w-4" /> Copied
        </>
      ) : (
        <>
          <Copy className="mr-2 h-4 w-4" /> Copy
        </>
      )}
    </Button>
  );
};

// Widget component for feedback
interface CustomWidgetProps {
  websiteName: string;
  theme: keyof typeof themes;
  isOpen: boolean;
  onClose: () => void;
}

const CustomWidget: React.FC<CustomWidgetProps> = ({
  websiteName,
  theme,
  isOpen,
  onClose,
}) => {
  const currentTheme = themes[theme];
  const [selectedRating, setSelectedRating] = useState<number>(0); // State for selected rating

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating); // Set selected rating
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 flex items-center justify-center z-[0] p-4 bg-black bg-opacity-50"
        >
          <div
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
            className={`${currentTheme.secondary} rounded-2xl z-[50] w-full max-w-[450px] shadow-2xl relative transition-all duration-300 ease-in-out transform scale-100 opacity-100`}
          >
            <button
              className={`absolute top-4 right-4 p-1 rounded-full ${currentTheme.text} ${currentTheme.hover}`}
              onClick={onClose}
            >
              <X size={20} />
            </button>
            <div className={`px-6 py-6 ${currentTheme.text}`}>
              <h2 className="text-2xl font-bold mb-1">
                How was your experience with {websiteName}?
              </h2>
              <p className="text-sm opacity-80">
                Your feedback helps us improve and provide a better experience.
              </p>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className={`w-full px-3 py-2 rounded-md ${currentTheme.border} ${currentTheme.text} ${currentTheme.secondary}`}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    className={`w-full px-3 py-2 rounded-md ${currentTheme.border} ${currentTheme.text} ${currentTheme.secondary}`}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rating" className="text-sm font-medium">
                    Rating
                  </Label>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        onClick={() => handleRatingClick(star)} // Handle click for rating
                        className={`w-8 h-8 cursor-pointer ${
                          star <= selectedRating
                            ? `fill-current text-${currentTheme.secondary}`
                            : `fill-transparent text-${currentTheme.secondary}`
                        } transition-colors duration-200 ease-in-out`}
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="feedback" className="text-sm font-medium">
                    Your Feedback
                  </Label>
                  <Textarea
                    id="feedback"
                    name="feedback"
                    placeholder="Your comments or suggestions"
                    className={`w-full px-3 py-2 rounded-md ${currentTheme.border} ${currentTheme.text} ${currentTheme.secondary}`}
                  />
                </div>
                <div className="pt-4">
                  <Button
                    type="submit"
                    className={`w-full px-4 py-2 rounded-md ${currentTheme.primary} ${currentTheme.hover}`}
                  >
                    Submit Feedback
                  </Button>
                </div>
              </form>
            </div>
            <div
              className={`${currentTheme.accent} rounded-b-2xl px-6 py-3 text-center`}
            >
              <p className={`text-xs ${currentTheme.text} opacity-60`}>
                Powered by{" "}
                <a
                  href="https://opinify.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold hover:underline"
                >
                  Opinify
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Embed code generation and tabs
interface EmbedCodeTabsProps {
  id: string;
  websiteNameFromParent: string;
}

const EmbedCodeTabs: React.FC<EmbedCodeTabsProps> = ({
  id,
  websiteNameFromParent,
}) => {
  const [selectedTab, setSelectedTab] = useState<"html" | "nextjs">("html");
  const [selectedTheme, setSelectedTheme] =
    useState<keyof typeof themes>("solarFlare");
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [websiteName, setWebsiteName] = useState<string>(websiteNameFromParent);

  const getCodeString = (theme: string, websiteName: string): string => {
    const htmlCodeString = `
  <body>
    <div style="position: fixed; bottom: 15px; right: 15px">
      <widget-web-component theme="${theme}" website-name="${websiteName}" projectid="${id}" />
    </div>
  
    <script src="https://widget.opinify.in/widget.umd.js"></script>
  </body>
    `;

    const nextjsCodeString = `
  
  declare global {
    namespace JSX {
      interface IntrinsicElements {
        "widget-web-component": React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement>,
          HTMLElement
        > & {
          projectid: string;
          theme: string;
        };
      }
    }
  }
  
  <body>
    <div style={{position: "fixed", bottom: "15px", right: "15px"}}>
      <widget-web-component theme="${theme}" website-name="${websiteName}" projectid="${id}" />
    </div>

    <script async src="https://widget.opinify.in/widget.umd.js"></script>
  </body>
    `;

    return selectedTab === "html" ? htmlCodeString : nextjsCodeString;
  };

  return (
    <>
      <Separator className="my-2" />
      <div className="mx-6 my-4">
        <h1 className="md:text-3xl text-xl font-bold mb-1">Preview Widget</h1>
        <p className="md:text-sm text-xs text-white/70 ">
          Preview your widget and get it matched with your website 🚀
        </p>
        <div className="flex items-center space-x-4 mt-4">
          {/* Theme selection */}
          <Select
            value={selectedTheme}
            onValueChange={(value) =>
              setSelectedTheme(value as keyof typeof themes)
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a theme" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(themes).map((theme) => (
                <SelectItem key={theme} value={theme}>
                  {theme.charAt(0).toUpperCase() + theme.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Dynamic website name input */}
          <Input
            type="text"
            value={websiteName}
            onChange={(e) => setWebsiteName(e.target.value)}
            placeholder="Your Website Name"
          />

          <Button onClick={() => setIsWidgetOpen(true)}>Open Widget</Button>
        </div>

        {/* Widget preview with dynamic theme and website name */}
        <CustomWidget
          websiteName={websiteName || "Your Website Name"}
          theme={selectedTheme}
          isOpen={isWidgetOpen}
          onClose={() => setIsWidgetOpen(false)}
        />
      </div>

      <Separator className="my-2" />

      <div className="mx-6 my-2 flex items-center justify-between">
        <div className="my-2">
          <h1 className="md:text-3xl text-xl font-bold">Embed Code</h1>
          <p className="md:text-sm text-xs text-white/70">
            Embed this code in your website to get user feedback! 😙
          </p>
        </div>
        {/* Copy to clipboard button */}
        <CopyToClipboard
          codeString={getCodeString(selectedTheme, websiteName)}
        />
      </div>

      {/* Embed code display */}
      <div className="w-[97%] p-5 border rounded-md mx-4 my-3 text-sm overflow-scroll">
        <Tabs
          defaultValue="html"
          onValueChange={(value) => setSelectedTab(value as "html" | "nextjs")}
        >
          <TabsList>
            <TabsTrigger value="html">HTML</TabsTrigger>
            <TabsTrigger value="nextjs">Next.js</TabsTrigger>
          </TabsList>
          <TabsContent value="html" className="h-auto overflow-scroll">
            <SyntaxHighlighter
              language="javascript"
              style={funky}
              customStyle={{
                lineHeight: "1.5",
                fontSize: "1rem",
                borderRadius: "5px",
                backgroundColor: "#000",
                padding: "20px",
              }}
            >
              {getCodeString(selectedTheme, websiteName)}
            </SyntaxHighlighter>
          </TabsContent>
          <TabsContent value="nextjs" className="h-auto overflow-scroll">
            <SyntaxHighlighter
              language="jsx"
              style={funky}
              customStyle={{
                lineHeight: "1.5",
                fontSize: "1rem",
                borderRadius: "5px",
                backgroundColor: "#000",
                padding: "20px",
              }}
            >
              {getCodeString(selectedTheme, websiteName)}
            </SyntaxHighlighter>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default EmbedCodeTabs;

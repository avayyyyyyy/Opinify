"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CopyToClipboard from "@/components/CopyToClipboard";
import { Separator } from "./ui/separator";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { funky } from "react-syntax-highlighter/dist/esm/styles/prism";

const EmbedCodeTabs = ({ id }: { id: string }) => {
  const [selectedTab, setSelectedTab] = useState("html");

  const htmlCodeString = `
<body>
  <div style="position: fixed; bottom: 15px; right: 15px">
    <widget-web-component projectid="${id}"></widget-web-component>
  </div>
  <!-- Include your UMD build -->
  <script src="https://opinify-widget-w24d.vercel.app/widget.umd.js"></script>
</body>

<!-- </> This code is also compatible in React! </> -->
  `;

  const nextjsCodeString = `
// Type Declation For TSX

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "widget-web-component": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        projectid: string;
      };
    }
  }
}

// Next.js Body Content

  <div style="position: fixed; bottom: 15px; right: 15px">
    <widget-web-component projectid="${id}"></widget-web-component>
  </div>
  
  <script async src="https://opinify-widget-w24d.vercel.app/widget.umd.js"></script>

  `;

  const getCodeString = () => {
    return selectedTab === "html" ? htmlCodeString : nextjsCodeString;
  };

  return (
    <>
      <Separator className="my-3" />
      <div className="mx-6 flex items-center justify-between">
        <div>
          <h1 className="md:text-3xl text-xl font-bold">Embed Code</h1>
          <p className="md:text-sm text-xs text-white/70">
            Embed this code in your website to get user feedbacks! 😙
          </p>
        </div>
        <div className="">
          <CopyToClipboard codeString={getCodeString()} />
        </div>
      </div>
      <div className="w-[96%] p-5 border rounded-md m-auto my-3 text-sm overflow-scroll">
        <Tabs defaultValue="html" onValueChange={setSelectedTab}>
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
              {htmlCodeString}
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
              {nextjsCodeString}
            </SyntaxHighlighter>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default EmbedCodeTabs;

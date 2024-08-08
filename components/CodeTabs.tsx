"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CopyToClipboard from "@/components/CopyToClipboard";

const EmbedCodeTabs = ({ id }: { id: string }) => {
  const [selectedTab, setSelectedTab] = useState("html");

  const htmlCodeString = `
<body>
  <widget-web-component projectid="${id}"></widget-web-component>

  <!-- Include React and ReactDOM from CDN -->
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

  <!-- Include your UMD build -->
  <script src="https://opinify-widget-w24d.vercel.app/widget.umd.js"></script>
</body>

// </> This code is React Compatible also </> 
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
      };
    }
  }
}

<widget-web-component projectid="${id}"></widget-web-component>

<script
  src="https://unpkg.com/react@18/umd/react.development.js"
  async
></script>
<script
  async
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
<script
  async
  src="https://opinify-widget-w24d.vercel.app/widget.umd.js"
></script>
  `;

  const getCodeString = () => {
    return selectedTab === "html" ? htmlCodeString : nextjsCodeString;
  };

  return (
    <>
      <div className="mx-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Embed Code</h1>
          <p className="text-sm text-white/70">
            Embed this code in your website to get user feedbacks! 😙
          </p>
        </div>
        <div className="">
          <CopyToClipboard codeString={getCodeString()} />
        </div>
      </div>
      <div className="w-full p-5 border rounded-md m-4 text-sm overflow-scroll">
        <Tabs defaultValue="html" onValueChange={setSelectedTab}>
          <TabsList>
            <TabsTrigger value="html">HTML</TabsTrigger>
            <TabsTrigger value="nextjs">Next.js</TabsTrigger>
          </TabsList>
          <TabsContent value="html">
            <pre>
              <code>{htmlCodeString}</code>
            </pre>
          </TabsContent>
          <TabsContent value="nextjs">
            <pre>
              <code>{nextjsCodeString}</code>
            </pre>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default EmbedCodeTabs;

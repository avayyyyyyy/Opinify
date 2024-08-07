"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const CopyToClipboard = ({ id }: { id: string }) => {
  const codeString = ` <body>
    <widget-web-component projectid="${id}"></widget-web-component>

    <!-- Include React and ReactDOM from CDN -->
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <!-- Include your UMD build -->
    <script src="https://opinify-widget-w24d.vercel.app/widget.umd.js"></script>
  </body>`;

  const CopyToClipboard = () => {
    navigator.clipboard.writeText(codeString);
    toast.success("Copied to clipboard successfully 🎉");
  };

  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={CopyToClipboard} variant={"outline"} size={"icon"}>
              <Copy size={16} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div>Copy to clipboard</div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default CopyToClipboard;

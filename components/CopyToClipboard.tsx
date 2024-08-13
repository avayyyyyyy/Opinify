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

const CopyToClipboard = ({ codeString }: { codeString: string }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    toast.success("Copied to clipboard successfully 🎉");
  };

  return (
    <div>
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button onClick={handleCopy} variant={"outline"} size={"icon"}>
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

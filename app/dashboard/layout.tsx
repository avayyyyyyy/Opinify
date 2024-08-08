import Sidebar from "@/components/Sidebar";
import React from "react";

const layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:flex block min-h-[80vh]">
      <Sidebar />
      {children}
    </div>
  );
};

export default layout;

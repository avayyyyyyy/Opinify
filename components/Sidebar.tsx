import { ChartArea } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      <aside className="md:flex hidden flex-col  w-64 h-screen px-5 pt-3 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-black dark:border-balck">
        <div className="flex flex-col justify-between flex-1">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <label className="px-3 text-xs text-black uppercase dark:text-white/50">
                Features
              </label>
              <hr />

              <Link
                className="flex items-center px-3 py-2 text-black transition-colors duration-300 transform rounded-lg dark:text-white/80 hover:bg-balck dark:hover:bg-balck  dark:hover:bg-gray-50/10 hover:text-white/50"
                href="/dashboard"
              >
                <ChartArea size={16} />

                <span className="mx-2 text-sm font-medium">Dashboard</span>
              </Link>
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

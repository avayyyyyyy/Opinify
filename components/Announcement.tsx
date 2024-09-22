import React from "react";

const Announcement = () => {
  return (
    <>
      <div className="bg-zinc-900 px-4 py-3 text-zinc-100">
        <div className="text-center flex items-center justify-center md:text-sm text-xs font-medium">
          {/* <span className="font-bold md:block hidden">Update:</span> */}
          <div className="inline-block ml-2">
            Congratulations, everyone! We’ve added over 10 new themes to
            customize your feedback form. 🎉
          </div>
        </div>
      </div>
    </>
  );
};

export default Announcement;

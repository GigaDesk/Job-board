import React from "react";

export default function SchoolBadge() {
  return (
    <div className="grid content-center p-4">
      <div className="rounded-full hover:bg-hover-gray w-[100px] h-[100px] p-[4px] transition-all duration-700 delay-300 ease-in-out">
        <div className="rounded-full w-[92px] h-[92px] bg-white border border-border-gray"></div>
      </div>
    </div>
  );
}
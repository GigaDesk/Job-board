"use client";

import MenuIcon from "@mui/icons-material/Menu";

export default function Sidebar() {
  return (
    <div className="bg-light-gray grid grid-rows-[100px_1fr] pl-[10px]">
      <div className="pt-4">
        <button className="hover:rounded-full hover:bg-hover-gray w-[48px] h-[48px]">
          <MenuIcon sx={{ color: "#1C2B33" }} />
        </button>
      </div>
    </div>
  );
}

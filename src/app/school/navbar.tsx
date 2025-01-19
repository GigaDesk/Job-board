import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Navbar() {
  return (
    <div className=" flex justify-between">
      <div className="grid content-center p-2">
        <button
          className="p-2 rounded-lg text-black text-xl hover:bg-hover-gray"
          style={{ fontFamily: "McLaren" }}
        >
          eardrum
          <ArrowDropDownIcon />
        </button>
      </div>
      <div className="grid content-center p-4">
        <div className="rounded-full hover:bg-hover-gray w-[48px] h-[48px] p-[4px] transition-all duration-700 delay-300 ease-in-out">
          <button className="rounded-full w-[40px] h-[40px] bg-white border border-border-gray"></button>
        </div>
      </div>
    </div>
  );
}

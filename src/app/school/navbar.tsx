import EardrumStatement from "./eardrum-statement";

export default function Navbar() {
  return (
    <div className=" flex justify-between">
      <EardrumStatement />
      <div className="grid content-center p-4">
        <div className="rounded-full hover:bg-hover-gray w-[48px] h-[48px] p-[4px] transition-all duration-700 delay-300 ease-in-out">
          <button className="rounded-full w-[40px] h-[40px] bg-white border border-border-gray"></button>
        </div>
      </div>
    </div>
  );
}

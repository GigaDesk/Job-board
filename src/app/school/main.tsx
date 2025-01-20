import EardrumStatement from "./eardrum-statement";
import CompanyStatement from "@/components/splash/companystatement";

export default function Main() {
  return (
    <div className=" grid grid-rows-[60px_390px_80px]">
      <div className=" grid justify-items-start">
        <EardrumStatement />
      </div>
      <div className="overflow-auto grid justify-items-center [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full">
        <div className=" w-[700px] text-black"></div>
      </div>
      <div className="grid content-center">
        <CompanyStatement />
      </div>
    </div>
  );
}

import PopupButton from "./popup-button";
import CompanyStatement from "@/components/splash/companystatement";
import RoutesToggle from "./routes-toggle";
import PopupRoutes from "./popup-routes";
import StudentTable from "./student-table";

export default function Main() {
  return (
    <div className=" grid grid-rows-[60px_390px_80px]">
      <div className=" grid justify-items-start">
        <PopupButton
          button={<RoutesToggle />}
          popupElement={<PopupRoutes />}
          popupPlacement="bottom-start"
        />
      </div>
      <div className="overflow-auto grid justify-items-center [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full max-md:p-2">
        <div className="md:w-[700px] text-black">
          <StudentTable />
        </div>
      </div>
      <div className="grid content-center">
        <CompanyStatement />
      </div>
    </div>
  );
}

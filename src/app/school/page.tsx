import Sidebar from "./sidebar";
import Navbar from "./navbar";
import CompanyStatement from "@/components/splash/companystatement";
import Main from "./main";

export default function School() {
  return (
    <div
      className="h-screen bg-white flex flex-row"
      style={{ fontFamily: "McLaren" }}
    >
      <Sidebar />
      <div className="grow grid h-screen relative">
        <Navbar />
        <Main />
        <div className="p-2">
          <CompanyStatement />
        </div>
      </div>
    </div>
  );
}

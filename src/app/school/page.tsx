import Sidebar from "./sidebar";
import Navbar from "./navbar";

export default function School() {
  return (
    <div
      className="min-h-screen bg-white flex flex-row"
      style={{ fontFamily: "McLaren" }}
    >
      <Sidebar />
      <div className="grow grid grid-rows-[74px_1fr]">
        <Navbar />
        <div className=""></div>
      </div>
    </div>
  );
}

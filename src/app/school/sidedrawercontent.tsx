import MenuIcon from "@mui/icons-material/Menu";
import PagesSection from "./pages-section";
import { SideDrawerState } from "@/state/store";

export default function SideDrawerContent() {
  const handleMenuClick = () => {
    SideDrawerState.show = false;
  };

  return (
    <div
      className="bg-light-gray w-[320px] md:w-[700px] lg:hidden min-h-screen"
      style={{ fontFamily: "McLaren" }}
    >
      <div className="lg:hidden grid content-center justify-items-start h-20">
        <button
          className="hover:rounded-full hover:bg-hover-gray w-[48px] h-[48px]"
          onClick={handleMenuClick}
        >
          <MenuIcon sx={{ color: "#1C2B33" }} />
        </button>
      </div>
      <PagesSection />
    </div>
  );
}

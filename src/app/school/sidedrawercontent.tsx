import MenuIcon from "@mui/icons-material/Menu";
import { NavbarProps } from "./navbar";
import PagesSection from "./pages-section";

export default function SideDrawerContent(props: NavbarProps) {
  return (
    <div
      className="bg-light-gray w-[320px] md:w-[700px] lg:hidden min-h-screen"
      style={{ fontFamily: "McLaren" }}
    >
      <div className="lg:hidden grid content-center justify-items-start h-20">
        <button
          className="hover:rounded-full hover:bg-hover-gray w-[48px] h-[48px]"
          onClick={props.onClickMenu}
        >
          <MenuIcon sx={{ color: "#1C2B33" }} />
        </button>
      </div>
      <PagesSection />
    </div>
  );
}

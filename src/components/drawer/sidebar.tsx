import MenuIcon from "@mui/icons-material/Menu";
import PagesSection from "./pages-section";
import { SidebarState } from "@/state/store";
import { useSnapshot } from "valtio";

//Sidebar appears on the left hand side of a large screen
export default function Sidebar() {
  const snap = useSnapshot(SidebarState);

  const handleMouseEnter = () => {
    SidebarState.showPagesSection = true;
  };

  const handleMouseLeave = () => {
    SidebarState.showPagesSection = false;
  };

  return (
    <div
      className="bg-light-gray grid grid-rows-[100px_1fr] pl-[10px] basis-[74px] hover:basis-1/4 transition-all duration-300 delay-300 ease-in-out max-lg:hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="pt-4">
        <button className="hover:rounded-full hover:bg-hover-gray w-[48px] h-[48px]">
          <MenuIcon sx={{ color: "#1C2B33" }} />
        </button>
      </div>
      <div>
        {snap.showPagesSection ? (
          <div>
            <PagesSection />
          </div>
        ) : null}
      </div>
    </div>
  );
}

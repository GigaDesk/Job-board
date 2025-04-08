import PopupButton from "@/components/button/popup-button";
import EardrumStatement from "./eardrum-statement";
import MenuIcon from "@mui/icons-material/Menu";
import RoutesToggle from "@/components/button/routes-toggle";
import { SideDrawerState } from "@/state/store";

export default function Navbar() {
  const handleMenuClick = () => {
    SideDrawerState.show = true;
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="max-lg:grid max-lg:grid-cols-[50px_1fr]">
          <div className="lg:hidden p-4 grid content-center">
            <button onClick={handleMenuClick}>
              <MenuIcon sx={{ color: "#1C2B33" }} />
            </button>
          </div>
          <PopupButton
            button={<EardrumStatement />}
            popupElement={<></>}
            popupPlacement="bottom-start"
          />
        </div>
      </div>
      <div className="grid justify-items-start">
        <PopupButton
          button={<RoutesToggle />}
          popupElement={<></>}
          popupPlacement="bottom-start"
        />
      </div>
    </div>
  );
}

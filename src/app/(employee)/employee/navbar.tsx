import PopupButton from "@/components/button/popup-button";
import EardrumStatement from "./eardrum-statement";
import MenuIcon from "@mui/icons-material/Menu";
import { SideDrawerState } from "@/state/store";
import RoutesToggle from "./routes-toggle";
import { ActiveRoute } from "../state/store";
import { useSnapshot } from "valtio";
import Filters from "./filters";

export default function Navbar() {
  const route = useSnapshot(ActiveRoute);

  const handleMenuClick = () => {
    SideDrawerState.show = true;
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="grid grid-cols-[50px_1fr]">
          <div className="p-4 grid content-center">
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
      {route.instance == "Home" ? <Filters /> : null}
    </div>
  );
}

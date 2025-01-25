import PopupButton from "./popup-button";
import SchoolProfile from "./school-profile";
import EardrumStatement from "./eardrum-statement";
import ProductContent from "./product-content";
import MenuIcon from "@mui/icons-material/Menu";
import RoutesToggle from "./routes-toggle";
import PopupRoutes from "./popup-routes";

export interface NavbarProps {
  onClickMenu?: any;
}

export default function Navbar(props: NavbarProps) {
  return (
    <div>
      <div className="flex justify-between">
        <div className="max-lg:grid max-lg:grid-cols-[50px_1fr]">
          <div className="lg:hidden p-4 grid content-center">
            <button onClick={props.onClickMenu}>
              <MenuIcon sx={{ color: "#1C2B33" }} />
            </button>
          </div>
          <PopupButton
            button={<EardrumStatement />}
            popupElement={<ProductContent />}
            popupPlacement="bottom-start"
          />
        </div>
        <SchoolProfile />
      </div>
      <div className="grid justify-items-start">
        <PopupButton
          button={<RoutesToggle />}
          popupElement={<PopupRoutes />}
          popupPlacement="bottom-start"
        />
      </div>
    </div>
  );
}

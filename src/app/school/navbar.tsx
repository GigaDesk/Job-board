import PopupButton from "./popup-button";
import SchoolProfile from "./school-profile";
import EardrumStatement from "./eardrum-statement";
import ProductContent from "./product-content";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  return (
    <div className=" flex justify-between">
      <div className="max-lg:grid max-lg:grid-cols-[50px_1fr]">
      <div className="lg:hidden p-4 grid content-center">
      <MenuIcon sx={{ color: "#1C2B33" }} />
      </div>
      <PopupButton
        button={<EardrumStatement />}
        popupElement={<ProductContent />}
        popupPlacement="bottom-start"
      />
      </div>
      <SchoolProfile />
    </div>
  );
}

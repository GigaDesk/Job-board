import PopupButton from "./popup-button";
import SchoolProfile from "./school-profile";
import EardrumStatement from "./eardrum-statement";
import ProductContent from "./product-content";

export default function Navbar() {
  return (
    <div className=" flex justify-between">
      <PopupButton
        button={<EardrumStatement />}
        popupElement={<ProductContent />}
      />
      <SchoolProfile />
    </div>
  );
}

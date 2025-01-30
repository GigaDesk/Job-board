import PopupButton from "@/components/button/popup-button";
import SchoolProfile from "./school-profile";
import SchoolProfilePopUp from "@/components/popup/school-profile-popup";
import StudentProfile from "./student-profile";
import StudentProfilePopUp from "@/components/popup/student-profile-popup";
import MenuIcon from "@mui/icons-material/Menu";
import RoutesToggle from "@/components/button/routes-toggle";
import PopupRoutes from "@/components/popup/popup-routes";
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
            button={<SchoolProfile />}
            popupElement={<SchoolProfilePopUp />}
            popupPlacement="bottom-start"
          />
        </div>
        <PopupButton
            button={<StudentProfile />}
            popupElement={<StudentProfilePopUp />}
            popupPlacement="bottom-start"
          />
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

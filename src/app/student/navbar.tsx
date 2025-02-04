import PopupButton from "@/components/button/popup-button";
import StudentSchoolProfile from "./student-school-profile";
import SchoolProfilePopUp from "@/components/popup/school-profile-popup";
import StudentProfile from "./student-profile";
import StudentProfilePopUp from "@/components/popup/student-profile-popup";
import MenuIcon from "@mui/icons-material/Menu";
import RoutesToggle from "@/components/button/routes-toggle";
import PopupRoutes from "@/components/popup/popup-routes";
import { SideDrawerState } from "@/state/store";
import { gql } from "../../__generated__/gql";
import { useQuery } from "@apollo/client";

const GET_STUDENT_PROFILE_QUERY = gql(`
query studentProfile{
  getStudentProfile{
    name
    phone_number
    registration_number
    school{
      name
      phone_number
    }
  }
}
`);

export default function Navbar() {
  const handleMenuClick = () => {
    SideDrawerState.show = true;
  };

  const { loading, data, error } = useQuery(GET_STUDENT_PROFILE_QUERY);

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
            button={
              <StudentSchoolProfile
                name={data?.getStudentProfile?.school.name}
                loading={loading}
              />
            }
            popupElement={
              <SchoolProfilePopUp
                name={data?.getStudentProfile?.school.name}
                phone_number={data?.getStudentProfile?.school.phone_number}
                loading={loading}
              />
            }
            popupPlacement="bottom-start"
          />
        </div>
        <PopupButton
          button={<StudentProfile />}
          popupElement={
            <StudentProfilePopUp
              name={data?.getStudentProfile?.name}
              phone_number={data?.getStudentProfile?.phone_number}
              registration_number={data?.getStudentProfile?.registration_number}
              loading={loading}
            />
          }
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

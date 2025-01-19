import EardrumStatement from "./eardrum-statement";
import SchoolProfile from "./school-profile";

export default function Navbar() {
  return (
    <div className=" flex justify-between">
      <EardrumStatement />
      <SchoolProfile />
    </div>
  );
}

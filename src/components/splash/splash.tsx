import Eardrum from "./eardrum";
import Loading from "./loading";
import CompanyStatement from "./companystatement";

export default function Splash() {
  return (
    <div className="grid grid-rows-2 gap-2">
      <Eardrum />
      <Loading />
    </div>
  );
}

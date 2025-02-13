import Eardrum from "./eardrum";
import Loading from "./loading";

//Splash renders the full content of the applications loading state (Brand and Indicator)
export default function Splash() {
  return (
    <div className="grid grid-rows-2 gap-2">
      <Eardrum />
      <Loading />
    </div>
  );
}

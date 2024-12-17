import Splash from "@/components/splash/splash";
import CompanyStatement from "@/components/splash/companystatement";

export default function Home() {
  return (
    <div
      className="min-h-screen grid content-center bg-white relative"
      style={{ fontFamily: "Inter" }}
    >
      <main className="h-96 grid content-center">
        <Splash />
      </main>
      <footer className="absolute bottom-0 w-full pb-4">
        <CompanyStatement />
      </footer>
    </div>
  );
}

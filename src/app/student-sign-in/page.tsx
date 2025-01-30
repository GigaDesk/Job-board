import Main from "./main";
import CompanyStatement from "@/components/splash/companystatement";

export default function SchoolSignIn() {
  return (
    <div
      className="min-h-screen grid content-center bg-white relative"
      style={{ fontFamily: "Inter" }}
    >
      <main className="h-96 grid content-center justify-items-center">
        <Main />
      </main>
      <footer className="absolute bottom-0 w-full pb-4">
        <CompanyStatement />
      </footer>
    </div>
  );
}

import CompanyStatement from "@/components/splash/companystatement";
import Main from "./main";

export default function RequestPasswordReset() {
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
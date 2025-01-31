import SchoolsList from "./schools-list";

export default function Main() {
  return (
    <div className="grid justify-items-center p-2">
      <div className="md:w-[700px] text-black">
        <div className="h-[350px] rounded-xl border border-border-table-gray overflow-auto grid justify-items-center [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full">
          <SchoolsList />
        </div>
      </div>
    </div>
  );
}

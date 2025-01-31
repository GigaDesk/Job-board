export default function School() {
  return (
    <div>
      <button>
        <div className="grid grid-cols-[50px_1fr] px-20 py-4">
          <div className="rounded-full hover:bg-hover-gray w-[48px] h-[48px] p-[4px] transition-all duration-700 delay-300 ease-in-out">
            <div className="rounded-full w-[40px] h-[40px] bg-white border border-border-gray"></div>
          </div>
          <div className="px-4 grid content-center">
            GigaDesk
          </div>
        </div>
      </button>
    </div>
  );
}

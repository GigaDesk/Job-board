"use client";

import { useRouter } from "next/navigation";

export interface SchoolItemProps {
  id?: number;
  name?: string;
}

export default function SchoolItem(props: SchoolItemProps) {
  
  const router = useRouter()

  const handleClick = () => {
    if (props.id != undefined) {
      router.push(`student-sign-in/${props.id}`)
    }
  };

  return (
    <div>
      <button onClick={handleClick}>
        <div className="grid grid-cols-[50px_1fr] px-20 py-4">
          <div className="rounded-full hover:bg-hover-gray w-[48px] h-[48px] p-[4px] transition-all duration-700 delay-300 ease-in-out">
            <div className="rounded-full w-[40px] h-[40px] bg-white border border-border-gray"></div>
          </div>
          <div className="px-4 grid content-center">{props.name}</div>
        </div>
      </button>
    </div>
  );
}

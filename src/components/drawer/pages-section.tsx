import { Stack } from "@mui/joy";

export default function PagesSection() {
  return (
      <div className="p-4 text-black">
        <Stack spacing={2}>
          <div className="">Pages</div>
          <div className="pl-4 py-2 rounded-full bg-light-blue text-bright-blue hover:bg-hover-gray hover:text-black cursor-pointer">
            Home
          </div>
        </Stack>
      </div>
  );
}

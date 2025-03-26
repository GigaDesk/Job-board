import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Typography from "@mui/joy/Typography";
import { useRouter } from "next/navigation";

export interface JobProps {
  id: number;
  title: string;
  location: string | null | undefined;
  description: string;
  company?: string | null;
}

export default function Job(props: JobProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/${props.id}`);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        // to make the card resizable
        overflow: "auto",
        resize: "horizontal",
      }}
    >
      <div className="grid grid-cols-[50px_1fr]">
        <div className="">
          <Avatar src="/static/images/avatar/1.jpg" size="lg" />
        </div>
        <div className=" grid content-center pl-4">{props.company}</div>
      </div>
      <CardContent>
        <div className="h-12 overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full">
          <Typography level="title-lg">{props.title}</Typography>
        </div>
        <Typography level="body-md"> {props.location} </Typography>
        <div className="mt-4 h-32 overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full">
          <Typography level="body-sm">{props.description}</Typography>
        </div>
      </CardContent>
      <CardActions buttonFlex="0 1 120px">
        <Button variant="outlined" color="neutral" onClick={handleClick}>
          View
        </Button>
      </CardActions>
    </Card>
  );
}

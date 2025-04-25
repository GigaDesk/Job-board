import * as React from "react";
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
  posted: string;
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
      <div className="grid">
        <div className=" grid content-center">{props.company}</div>
      </div>
      <CardContent>
        <div className="h-12 overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full">
          <Typography level="title-lg">{props.title}</Typography>
        </div>
        <Typography level="body-md"> {props.posted} </Typography>
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

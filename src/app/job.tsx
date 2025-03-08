import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
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
        width: 320,
        height: 320,
        // to make the card resizable
        overflow: "auto",
        resize: "horizontal",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Avatar src="/static/images/avatar/1.jpg" size="lg" />
      </Box>
      <CardContent>
        <Typography level="title-lg">{props.title}</Typography>
        <Typography level="body-md"> {props.location} </Typography>
        <div className="h-20 overflow-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-border-gray hover:[&::-webkit-scrollbar-thumb]:bg-hover-gray  [&::-webkit-scrollbar-thumb]:rounded-full">
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

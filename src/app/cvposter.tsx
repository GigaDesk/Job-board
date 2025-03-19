import * as React from "react";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import Typography from "@mui/joy/Typography";

export default function CvPoster() {
  return (
    <Card
      variant="outlined"
      sx={{
        // to make the card resizable
        overflow: "auto",
        resize: "horizontal",
      }}
    >
      <CardContent>
        <Typography level="title-lg">
          Ready to level up your CV game?
        </Typography>

        <Typography level="body-sm">
          Collaborate with a professional cv writer to highlight your skills and
          achievements like never before.
        </Typography>
      </CardContent>
      <CardActions>
        <div>
          <Button variant="outlined" color="neutral">
            Upgrade My CV
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}

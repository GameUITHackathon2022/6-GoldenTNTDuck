import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import { ButtonBase, CardActionArea } from "@mui/material";

export default function CardArea({ handleNext, data}) {
  const {org_name, address, tree_count, limit} = data
  return (
    <Card onClick={handleNext} variant="outlined" sx={{ width: 320, cursor: 'pointer' }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardActionArea>
        <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
          {org_name}
        </Typography>
        <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
          {address}
        </Typography>
        <Divider />
        <CardOverflow
          variant="soft"
          sx={{
            display: "flex",
            gap: 1.5,
            py: 1.5,
            px: "var(--Card-padding)",
            bgcolor: "background.level1",
          }}
        >
        <div>
          {tree_count}/{limit}
        </div>
        </CardOverflow>
      </CardActionArea>
    </Card>
  );
}

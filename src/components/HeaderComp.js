import * as React from "react";

import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
import Carosel from "./CaroselComp";

const HeaderComp = () => {
  return (
    <div>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
      
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          
          sx={{color:"#dc5e24",}}
        >
          Pricing
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
          sx={{color:"#dc5e24",}}
        >
          Quickly build an effective pricing table for your potential customers
          with this layout. It&apos;s built with default MUI components with
          little customization.
        </Typography>
      </Container>
    </div>
  );
};

export default HeaderComp;

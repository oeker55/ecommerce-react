import * as React from "react";
import Container from "@mui/material/Container";
import HeaderComp from "../HeaderComp";
import Carosel from "../CaroselComp";

const HomePage = () => {
  return (
    <div>
      <Container
        disableGutters
        maxWidth="lg"
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          pt: 8,
          pb: 6,
        }}
      >
        <Carosel />
        <HeaderComp />
      </Container>

      <Container />
    </div>
  );
};

export default HomePage;



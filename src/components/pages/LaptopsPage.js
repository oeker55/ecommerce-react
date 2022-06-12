import * as React from "react";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import LinearProgress from "@mui/material/LinearProgress";

import { useEffect } from "react";
import LaptopCard from "../LaptopCard";
import { showLaptops } from "../../actions/laptopActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Alert, Typography, Link } from "@mui/material";

const LaptopsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showLaptops());
  }, [dispatch]);

  const { allLaptops, err, fetched, fetching } = useSelector((state) => {
    return state.laptops;
  });

  return (
    <div>
      <Container maxWidth="lg" component="main">
        <Typography variant="h2" color="#613707" >You Are Looking For
All Products Are Here!!!</Typography>
        <Grid container spacing={5} alignItems="flex-end">
          <Grid item xs={12} sx={{ textAlign: "center", margin: "0 auto" }}>
            {fetching ? (
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
            ) : null}

            {!fetched && err ? (
              <Alert severity="error">
                <Typography variant="subtitle1">{err}</Typography>
              </Alert>
            ) : allLaptops.length === 0 && fetched ? (
              <Alert severity="info">
                <Typography variant="subtitle1">
                  There are no Laptops at list...
                  <Link href="/laptops/addNewLaptop">
                    Click for add a new Laptop
                  </Link>
                </Typography>
              </Alert>
            ) : null}
          </Grid>

          {allLaptops.map((laptop, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <LaptopCard
                laptop={laptop}
                // title={laptop.title}
                // cover={laptop.cover}
                // price={laptop.price}
                // brand={laptop.brand}
                // cpu={laptop.cpu}
                // gpu={laptop.gpu}
                // os={laptop.os}
                // ram_memory={laptop.ram_memory}
                // ssd_memory={laptop.ssd_memory}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default LaptopsPage;

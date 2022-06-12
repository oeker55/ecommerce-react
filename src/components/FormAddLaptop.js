import React, { useEffect } from "react";

import TextField from "@mui/material/TextField";

import {  Container } from "@mui/system";
import { Paper, Typography, Button } from "@mui/material";
import useStyles from "../styles";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

import { addLaptop, updateLaptop } from "../actions/laptopActions";

import MuiAlert from "@mui/material/Alert";
import { useNavigate, useParams } from "react-router-dom";


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const FormAddLaptop = () => {
  const { id } = useParams(null);
  const [isDone, setIsDone] = useState(false);
  const { fetched,fetching, err } = useSelector((state) => state.laptops);

  const [laptop, setLaptop] = useState({
    title: "",
    cover: "",
    brand: "",
    cpu: "",
    gpu: "",
    ssd_memory: "",
    ram_memory: "",
    os: "",
    price: "",
  });
  const willUpdateLaptop = useSelector((state) =>
    id ? state.laptops.allLaptops.find((laptop) => laptop._id === id) : null
  );
  useEffect(() => {
    if (willUpdateLaptop) {
  
      setLaptop(willUpdateLaptop);
    }
  }, [id, willUpdateLaptop]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("use Effect isDone", isDone);
    console.log("use effect fetched", fetched);
    console.log("use effect errorMessage", err);
    console.log("use effect fetching", fetching);
    if (fetched && isDone) {
      setTimeout(() => {
        navigate("/laptops");
      }, 3000);
    }
  }, [navigate, fetched,fetching,isDone,err]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsDone(true);
    if (!id) {
      dispatch(addLaptop(laptop));

      console.log("fetched", fetched);
      console.log("isDone", isDone);
    } else {
      dispatch(updateLaptop(id, laptop));
    }
  };
  const clear = (e) => {
    setLaptop({
      title: "",
      cover: "",
      brand: "",
      cpu: "",
      gpu: "",
      ssd_memory: "",
      ram_memory: "",
      os: "",
      price: "",
    });
  };

  const classes = useStyles();

  return (
  
   
    <Container
      maxWidth="sm"
      sx={{
        border: "5px solid #757ce8",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <Paper sx={{ border: "blue" }}>
        <form onSubmit={handleSubmit}>
          <Typography

          sx={{marginBottom:"15px"}}
          
            className={classes.formHeader}
            variant="h4"
          >
            {" "}
            {id? "Edit":"Add New"} Laptop{" "}
          </Typography>

          <TextField
            sx={{ marginBottom: "15px" }}
            color="success"
            size="small"
            value={laptop.title}
            onChange={(e) => setLaptop({ ...laptop, title: e.target.value })}
            fullWidth
            label="Name"
          />
          <TextField
            sx={{ marginBottom: "15px" }}
            color="success"
            size="small"
            value={laptop.cover}
            onChange={(e) => setLaptop({ ...laptop, cover: e.target.value })}
            fullWidth
            label="Cover Url"
          />
          <Box>
            <img width="50%" src={laptop.cover}  alt="Laptop Cover" />
          </Box>

          <TextField
            sx={{ marginBottom: "15px" }}
            color="success"
            size="small"
            value={laptop.brand}
            onChange={(e) => setLaptop({ ...laptop, brand: e.target.value })}
            fullWidth
            label="Brand name"
          />
          <TextField
            sx={{ marginBottom: "15px" }}
            color="success"
            size="small"
            value={laptop.cpu}
            onChange={(e) => setLaptop({ ...laptop, cpu: e.target.value })}
            fullWidth
            label="Cpu"
          />

          <TextField
            sx={{ marginBottom: "15px" }}
            color="success"
            size="small"
            value={laptop.gpu}
            onChange={(e) => setLaptop({ ...laptop, gpu: e.target.value })}
            fullWidth
            label="Graphic Card"
          />
          <TextField
            sx={{ marginBottom: "15px" }}
            color="success"
            size="small"
            value={laptop.ssd_memory}
            onChange={(e) =>
              setLaptop({ ...laptop, ssd_memory: e.target.value })
            }
            fullWidth
            label="SSD Memory"
          />
          <TextField
            sx={{ marginBottom: "15px" }}
            color="success"
            size="small"
            value={laptop.ram_memory}
            onChange={(e) =>
              setLaptop({ ...laptop, ram_memory: e.target.value })
            }
            fullWidth
            label="RAM Memory"
          />
          <TextField
            sx={{ marginBottom: "15px" }}
            color="success"
            size="small"
            value={laptop.os}
            onChange={(e) => setLaptop({ ...laptop, os: e.target.value })}
            fullWidth
            label="Operating System"
          />
          <TextField
            sx={{ marginBottom: "15px" }}
            color="success"
            size="small"
            value={laptop.price}
            onChange={(e) => setLaptop({ ...laptop, price: e.target.value })}
            fullWidth
            label="Price"
          />
          <Button
          className={classes.button}
          sx={{marginBottom:"10px"}}
          color="primary"
          type="submit"
          size="large"
          variant="contained"
          fullWidth
          >
            {" "}
            Add{" "}
          </Button>
          <Button
            className={classes.button}
            color="secondary"
            onClick={clear}
            size="large"
            variant="contained"
            fullWidth
          >
            {" "}
            Clear{" "}
          </Button>
        </form>
      </Paper>
      <br />

      <hr />
      {fetching ? <LinearProgress color="success" />:""}

      {fetched && isDone ? (
        <Alert severity="success">
          Succesfully Saved..
          <br />
          Redirecting to Laptops .. <LinearProgress color="success" />
        </Alert>
      ) :""}
      {!fetched && err && !fetching? <Alert severity="error">{err}</Alert> :""}
    </Container>
 

  );
};

export default FormAddLaptop;
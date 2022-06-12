import * as React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import useStyles from "../styles";
import { useDispatch } from "react-redux";
import { removeLaptop } from "../actions/laptopActions";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";


const LaptopCard = ({ laptop }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEdit = () => {
    navigate(`/laptops/addNewLaptop/${laptop._id}`);
  };

  const handleDelete = () => {
    dispatch(removeLaptop(laptop._id));
  };
  const [price, setPrice]= useState(laptop.price)
  
  useEffect(() => {
    if(laptop.price){
      const StringPrice = laptop.price.toString()
      const Sliced =StringPrice.slice(0,4)
      const Splited =Sliced.split("")
      Splited.splice(1,0,",").toString()
      Splited.join("")
    setPrice(Splited)
      
    }
    
  }, [laptop])
  



  return (
    <div>
      <Card sx={{
            border:"2px solid #dc5e24",
            
          }}>
        <CardHeader
          title={laptop.title}
          titleTypographyProps={{ align: "center", variant: "h6" }}
          sx={{
            backgroundColor:"#d5f7eb",
          }}
        />
        <CardMedia
          // sx={{paddingTop:"56.25%"}} for 16:9
          className={classes.media}
          component="div"
          image={laptop.cover}
        />
        <CardContent sx={{padding:"0",}}>
          <Box
            sx={{
              padding:"15px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "baseline",
              mb: 2,
              backgroundColor:"#d5f7eb",
              borderRadius:"5px"
            }}
          >
             <Typography component="span" variant="span" color="secondary"><span style={{color:"blue"}}>Brand :<br/></span> {laptop.brand}</Typography>
            <Typography component="span" variant="span" color="secondary"> <span style={{color:"blue"}}>Processor :<br/></span>{laptop.cpu}</Typography>
            <Typography component="span" variant="span" color="secondary"><span style={{color:"blue"}}>Graphic Card :<br/></span> {laptop.gpu}</Typography>
            <Typography component="span" variant="span" color="secondary"><span style={{color:"blue"}}>RAM Memory :<br/></span>{laptop.ram_memory} GB</Typography>
            <Typography component="span" variant="span" color="secondary"><span style={{color:"blue"}}>SSD Memory :<br/></span>{laptop.ssd_memory} GB</Typography>
            <Typography component="span" variant="span" color="secondary"><span style={{color:"blue"}}>Operating System :<br/></span>{laptop.os}</Typography><hr/>
            <Typography component="h4" variant="h4" color="red"><span fontSize="30px" style={{color:"blue"}}>Price:<br/></span>{price} <span style={{fontSize:"40px",color:"red"}}>$</span></Typography>
            
             
         
            
          </Box>
        </CardContent>
        <CardActions>
       
          <Button fullWidth variant="contained" onClick={handleEdit}>
            edit
          </Button>
          <Button fullWidth variant="contained" onClick={handleDelete}>
            delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default LaptopCard;

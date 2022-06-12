import React, { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";


import HomePage from './components/pages/HomePage'
import LaptopsPage from './components/pages/LaptopsPage'
import AddLaptopPage from './components/pages/AddLaptopPage'
import OthersPage from "./components/pages/OthersPage";


import AppBarComp from "./components/AppBarComp";
import FooterComp from "./components/FooterComp";

 


const App = () => {
  const [currentId , setCurrrentId] = useState("boş")
  return (
    <div >
      
       <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
<Container  >

      <AppBarComp />

      
      <Container sx={{paddingTop:"5rem"}}>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/laptops' element={<LaptopsPage currentId={currentId} setCurrrentId={setCurrrentId}/>}/>
        <Route path='/laptops/addNewLaptop' element={<AddLaptopPage/>}/>
        <Route path='/laptops/others' element={<OthersPage/>}/>
        <Route path='/laptops/addNewLaptop/:id' element={<AddLaptopPage/>}/>
      </Routes>
      </Container>

      
      <FooterComp />
</Container>
      

    </div>
  )
}

export default App
import * as React from "react";
import GlobalStyles from "@mui/material/GlobalStyles";
import FormAddLaptop from "../FormAddLaptop";

const AddLaptopPage = () => {
  return (
    <div>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
  
      <FormAddLaptop />
    </div>
  );
};

export default AddLaptopPage;

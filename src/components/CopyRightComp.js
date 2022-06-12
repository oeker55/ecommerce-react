import * as React from "react";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const CopyRightComp = (props) => {
  return (
    <div>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        {...props}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
};

export default CopyRightComp;

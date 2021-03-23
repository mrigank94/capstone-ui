import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://www.upgrad.com/">
          Upgrad SpringWorks Batch
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
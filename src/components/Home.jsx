import { Box, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import courseService from "../service/course.service";
import CourseCard from "./common/CourseCard";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Home = (props) => {
  
  const handleClick = () => {
    props.history.push('/add-booking');
  }

  return (
    <Box display='flex' flexDirection='column' height='80vh' justifyContent='center' alignItems='center'>
      <Typography variant='h5'>
        Self drive vehicle rental in Mumbai
      </Typography>
      <div className='book-vehicle-container' onClick={handleClick}>
          <p>Book Now</p>
          <ArrowForwardIcon/>
      </div>
    </Box>
  )
};

export default Home;

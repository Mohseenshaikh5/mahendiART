import React from 'react'
import { Box, Typography } from '@mui/material';
import '../App.css';


const Banner = () => {

        const boxStyle = {
          backgroundImage: 'url("https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?cs=srgb&dl=pexels-viresh-studio-1444442.jpg&fm=jpg")',
          backgroundSize: 'cover', // Adjust based on your preference
          backgroundPosition: 'center', // Adjust based on your preference
          height: '500px', // Set a height for your Box
        };

        const text={
            color:"#fff",
            textAlign:"center",
            fontFamily:"fantasy",
color:"blue"
            
        }
  return (
    <>
<Box style={boxStyle}>
{/* <Box pt={20}>
<Typography className='google-fonts' variant='h3' style={text} >Mahedi design </Typography>
<Typography  className='google-fonts' variant='h3' style={text} >to make you fall in love</Typography>
</Box> */}
</Box>
    </>
  )
}

export default Banner
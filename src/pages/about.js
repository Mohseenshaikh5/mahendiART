import React from 'react'
import { Box, CardMedia, Container, Grid, Typography, Card, CardContent, CardActions, Button } from '@mui/material'
import '../App.css';


const About = () => {
  return (
    <>

      <Box mt={10}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}> {/* For extra small devices, take full width; for small devices and up, take half width */}
              <Box mt={10}>
                <Box textAlign="center" m={5} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography variant='h4' className='poppins-thin' sx={{ borderBottom: "5px solid green", borderRadius: "8px", width: "fit-content" }}>About Us</Typography>
                </Box>
                <Typography variant="body1" textAlign="center" className='poppins-thin'>
                  Mehendi is the art of painting the body in ornate designs with henna, associated with transformation and transcendence. We, Royal Mehendi Artists situated at Malad West, Mumbai, Maharashtra, provide beautiful mehendi designs as a trendy alternative to tattoos.
                  We are proud to be able to evolve from the traditional patterns of mehendi into more and more intricate and decorative designs in time.
                  The unique designs and intricacy of the mehendi makes it an outstanding work of art.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <Card sx={{ maxWidth: 700, borderRadius: "15px" }}>
                  <CardMedia
                    sx={{ height: 400 }} // Adjust height for smaller screens
                    image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT78c8rrsTl7IgNRNUEvTsBd7JNn8ELgvXXrA&usqp=CAU'
                    title="green iguana"
                  />
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>

      </Box>
    </>
  )
}

export default About
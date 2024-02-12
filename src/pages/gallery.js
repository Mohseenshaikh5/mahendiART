import React, { useState } from 'react'
import { Card, Container, Grid, CardMedia, Box, Typography, Button, Stack } from '@mui/material'
import ImgData from '../data/galleryData'
import Pagination from '@mui/material/Pagination';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const handleFilter = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset page to 1 when category changes
  };

  const filteredData = selectedCategory === 'All' ? ImgData : ImgData.filter(item => item.category === selectedCategory);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  // const filteredData = selectedCategory === 'All' ? ImgData : ImgData.filter(item => item.category === selectedCategory);
  return (
    <>
      <Box mt={10} mb={5}>
        <Container maxWidth="xl">
          <Box textAlign="center" m={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant='h4' className='poppins-thin' sx={{ borderBottom: "5px solid green", borderRadius: "8px", width: "fit-content" }}>Gallery</Typography>
          </Box>
          <Box mb={2} >
            <Stack direction={"row"} spacing={3} justifyContent={"center"}>
              <Button variant="contained" onClick={() => handleFilter('All')} sx={{ padding: "2", backgroundColor: selectedCategory === 'All' ? '#f50057' : 'inherit', color: selectedCategory === 'All' ? '#ffffff' : 'inherit' }} >
                All
              </Button>
              <Button variant="contained" onClick={() => handleFilter('arbic')} sx={{ backgroundColor: selectedCategory === 'Arbic' ? '#f50057' : 'inherit', color: selectedCategory === 'Arbic' ? '#ffffff' : 'inherit' }}>
                Arbic
              </Button>
              <Button variant="contained" onClick={() => handleFilter('indian')} sx={{ backgroundColor: selectedCategory === 'Indian' ? '#f50057' : 'inherit', color: selectedCategory === 'Indian' ? '#ffffff' : 'inherit' }} >
                Indian
              </Button>
            </Stack>
          </Box>
          <Grid container spacing={3}>
            {
              currentItems.map((item) => (
                <Grid item xs={6} sm={6} md={4}>
                  <Card sx={{ maxWidth: 500, borderRadius: "10px" }}>
                    <CardMedia
                      sx={{ height: 200 }}
                      image={item?.img} title="green iguana"
                    />
                  </Card>
                </Grid>
              ))
            }

          </Grid>
          {totalPages > 1 && (
            <Box mt={3} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handleChangePage}
                variant="outlined"
                shape="rounded"
                color="primary"
              />
            </Box>
          )}
        </Container>
      </Box>
    </>
  )
}

export default Gallery
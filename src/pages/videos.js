import { Card, Container, Grid, CardMedia, Box, Typography, Stack, Button } from '@mui/material';
import React, { useState } from 'react';
import ImgData from '../data/galleryData';
import Pagination from '@mui/material/Pagination';

const Videos = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  const handleCategories = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const filteredVideosData = selectedCategory === "All" ? ImgData : ImgData.filter(item => item.category === selectedCategory);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredVideosData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredVideosData.length / itemsPerPage);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Box mt={10} mb={5}>
        <Container maxWidth="xl">
          <Box textAlign="center" m={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant='h4' className='poppins-thin' sx={{ borderBottom: "5px solid green", borderRadius: "8px", width: "fit-content" }}>Videos</Typography>
          </Box>
          <Box mb={2} >
            <Stack direction={"row"} spacing={3} justifyContent={"center"}>
              <Button variant="contained" onClick={() => handleCategories('All')} sx={{ backgroundColor: selectedCategory === 'All' ? '#f50057' : 'inherit', color: selectedCategory === 'All' ? '#ffffff' : 'inherit' }} >
                All
              </Button>
              <Button variant="contained" onClick={() => handleCategories('arbic')} sx={{ backgroundColor: selectedCategory === 'Arabic' ? '#f50057' : 'inherit', color: selectedCategory === 'Arabic' ? '#ffffff' : 'inherit' }}>
                Arabic
              </Button>
              <Button variant="contained" onClick={() => handleCategories('indian')} sx={{ backgroundColor: selectedCategory === 'Indian' ? '#f50057' : 'inherit', color: selectedCategory === 'Indian' ? '#ffffff' : 'inherit' }} >
                Indian
              </Button>
            </Stack>
          </Box>
          <Grid container spacing={3}>
            {currentItems.map((item, index) => (
              <Grid key={index} item xs={6} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="video"
                    controls
                    sx={{ height: 400 }}
                    title="Sample Video"
                  >
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </CardMedia>
                </Card>
              </Grid>
            ))}
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
  );
};

export default Videos;

// FILEPATH: /Users/jiawenwang/WebstormProjects/deepvision/src/pages/Home.jsx
import React from 'react';
import { Container, Typography, Button, Grid, Card, CardMedia, CardContent, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const featuredDesigns = [
    { id: 1, title: 'Modern Living Room', image: '/images/living-room.jpg' },
    { id: 2, title: 'Cozy Bedroom', image: '/images/bedroom.jpg' },
    { id: 3, title: 'Minimalist Kitchen', image: '/images/kitchen.jpg' },
];

function Home() {
    return (
        <Container maxWidth="lg">
            <Box sx={{ mb: 8, textAlign: 'center' }}>
                <Typography component="h1" variant="h1" gutterBottom color="primary">
                    Transform Your Space
                </Typography>
                <Typography variant="h5" paragraph color="text.secondary">
                    Discover inspiring interior designs for your dream home
                </Typography>
                <Button variant="contained" color="secondary" size="large" component={RouterLink} to="/gallery" sx={{ mt: 2 }}>
                    Explore Our Gallery
                </Button>
            </Box>

            <Box sx={{ mb: 8 }}>
                <Typography variant="h2" gutterBottom align="center" color="primary">
                    Featured Designs
                </Typography>
                <Grid container spacing={4}>
                    {featuredDesigns.map((design) => (
                        <Grid item key={design.id} xs={12} sm={6} md={4}>
                            <Card>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={design.image}
                                    alt={design.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {design.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            <Box sx={{ bgcolor: 'background.paper', p: 6, borderRadius: 4 }}>
                <Typography variant="h3" gutterBottom align="center" color="primary">
                    About Us
                </Typography>
                <Typography variant="body1" paragraph align="center">
                    At DeepVision Interiors, we believe that your home should be a reflection of your personality and lifestyle. Our team of experienced designers is dedicated to creating beautiful, functional spaces that you'll love to live in.
                </Typography>
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                    <Button variant="outlined" color="primary" size="large" component={RouterLink} to="/about">
                        Learn More
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default Home;

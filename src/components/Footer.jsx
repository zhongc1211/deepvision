// FILEPATH: /Users/jiawenwang/WebstormProjects/deepvision/src/components/Footer.jsx
import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    DeepVision Interiors
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Transforming spaces, inspiring lives
                </Typography>
                <Typography variant="body2" color="text.secondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://deepvision.sg/">
                        DeepVision Interiors
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;

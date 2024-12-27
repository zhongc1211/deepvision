// FILEPATH: /Users/jiawenwang/WebstormProjects/deepvision/src/components/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'primary.main', fontWeight: 'bold' }}>
                        DeepVision Interiors
                    </Typography>
                    <Box>
                        <Button color="primary" component={Link} to="/">Home</Button>
                        <Button color="primary" component={Link} to="/gallery">Gallery</Button>
                        <Button color="primary" component={Link} to="/about">About</Button>
                        <Button color="primary" component={Link} to="/virtual-design">Virtual Design</Button>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;

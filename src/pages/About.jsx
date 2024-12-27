// FILEPATH: /Users/jiawenwang/WebstormProjects/deepvision/src/pages/About.jsx
import React from 'react';
import { Container, Typography, Paper, Grid } from '@mui/material';

function About() {
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
                <Typography variant="h2" component="h1" gutterBottom align="center">
                    About DeepVision Interiors
                </Typography>
                <Typography variant="body1" paragraph>
                    At DeepVision Interiors, we believe that your home should be a reflection of your personality and lifestyle. Our team of experienced designers is dedicated to creating beautiful, functional spaces that you'll love to live in.
                </Typography>
                <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4 }}>
                    Our Process
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>1. Initial Consultation</Typography>
                        <Typography variant="body1">We meet with you to discuss your vision, needs, and budget.</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>2. Design Concept</Typography>
                        <Typography variant="body1">Our team creates a custom design plan tailored to your preferences.</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>3. Refinement</Typography>
                        <Typography variant="body1">We work with you to refine the design until it's perfect.</Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>4. Implementation</Typography>
                        <Typography variant="body1">We oversee the entire process, from sourcing materials to final installation.</Typography>
                    </Grid>
                </Grid>
                <Typography variant="h4" component="h2" gutterBottom sx={{ mt: 4 }}>
                    Our Team
                </Typography>
                <Typography variant="body1" paragraph>
                    Our diverse team of designers brings a wealth of experience and creativity to every project. From modern minimalism to cozy traditional styles, we have the expertise to bring your vision to life.
                </Typography>
            </Paper>
        </Container>
    );
}

export default About;

// FILEPATH: /Users/jiawenwang/WebstormProjects/deepvision/src/pages/Gallery.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box, useMediaQuery, Select, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import { motion, AnimatePresence } from 'framer-motion';
import DesignCard from '../components/DesignCard';
import './Gallery.css';

function Gallery() {
    const [designs, setDesigns] = useState([]);
    const [filteredDesigns, setFilteredDesigns] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [activeCategory, setActiveCategory] = useState('All');

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        const imageFiles = [
            'balcony.jpg', 'bedroom3.jpg', 'kitchen13.jpg', 'kitchen5.jpg', 'living-room.jpg', 'living-room6.jpg',
            'bathroom.jpg', 'bedroom4.jpg', 'kitchen14.jpg', 'kitchen6.jpg', 'living-room2.jpg', 'living-room7.jpg',
            'bathroom2.jpg', 'kitchen10.jpg', 'kitchen2.jpg', 'kitchen7.jpg', 'living-room3.jpg', 'living-room8.jpg',
            'bedroom.jpg', 'kitchen11.jpg', 'kitchen3.jpg', 'kitchen8.jpg', 'living-room4.jpg', 'office.jpg',
            'bedroom2.jpg', 'kitchen12.jpg', 'kitchen4.jpg', 'kitchen9.jpg', 'living-room5.jpg', 'office2.jpg'
        ];

        const designsData = imageFiles.map((fileName, index) => {
            const name = fileName.replace(/\d*\.jpg$/, '').replace(/-/g, ' ').trim();
            const capitalizedName = name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            return {
                id: index + 1,
                title: `${capitalizedName} Design ${index + 1}`,
                src: `/images/${fileName}`,
                category: name.split(' ')[0]
            };
        });

        setDesigns(designsData);
        setFilteredDesigns(designsData);
    }, []);

    const handleImageClick = (clickedDesign) => {
        const index = filteredDesigns.findIndex(design => design.id === clickedDesign.id);
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const handleCategoryFilter = (category) => {
        setActiveCategory(category);
        if (category === 'All') {
            setFilteredDesigns(designs);
        } else {
            const filtered = designs.filter(design => design.category.toLowerCase() === category.toLowerCase());
            setFilteredDesigns(filtered);
        }
    };

    const categories = ['All', ...new Set(designs.map(design => design.category))];

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h2" component="h1" gutterBottom align="center">
                Our Design Gallery
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                {isMobile ? (
                    <Select
                        value={activeCategory}
                        onChange={(e) => handleCategoryFilter(e.target.value)}
                        sx={{ width: '100%', maxWidth: 300 }}
                    >
                        {categories.map((category) => (
                            <MenuItem key={category} value={category}>
                                {category}
                            </MenuItem>
                        ))}
                    </Select>
                ) : (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={activeCategory === category ? "contained" : "outlined"}
                                onClick={() => handleCategoryFilter(category)}
                            >
                                {category}
                            </Button>
                        ))}
                    </Box>
                )}
            </Box>
            <motion.div layout className="gallery-grid">
                <AnimatePresence>
                    {filteredDesigns.map((design) => (
                        <motion.div
                            key={design.id}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <DesignCard
                                design={design}
                                onClick={handleImageClick}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                slides={filteredDesigns}
                index={photoIndex}
                render={{
                    slide: ({ slide }) => (
                        <div style={{ position: "relative", width: "100%", height: "100%" }}>
                            <img
                                src={slide.src}
                                alt={slide.title}
                                style={{ objectFit: "contain", width: "100%", height: "100%" }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                                    color: "white",
                                    padding: "10px",
                                }}
                            >
                                <h3>{slide.title}</h3>
                                <p>{slide.category}</p>
                            </div>
                        </div>
                    ),
                }}
            />
        </Container>
    );
}

export default Gallery;

// FILEPATH: /Users/jiawenwang/WebstormProjects/deepvision/src/pages/Gallery.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import DesignCard from '../components/DesignCard';
import './Gallery.css';

function Gallery() {
    const [designs, setDesigns] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    useEffect(() => {
        const imageFiles = [
            'balcony.jpg', 'bedroom2.jpg', 'kitchen3.jpg', 'kitchen7.jpg', 'living-room4.jpg', 'living-room8.jpg',
            'bathroom.jpg', 'bedroom3.jpg', 'kitchen4.jpg', 'living-room.jpg', 'living-room5.jpg', 'office.jpg',
            'bathroom2.jpg', 'kitchen.jpg', 'kitchen5.jpg', 'living-room2.jpg', 'living-room6.jpg', 'office2.jpg',
            'bedroom.jpg', 'kitchen2.jpg', 'kitchen6.jpg', 'living-room3.jpg', 'living-room7.jpg'
        ];

        const designsData = imageFiles.map((fileName, index) => {
            const name = fileName.replace(/\d+\.jpg$/, '').replace(/-/g, ' ').trim();
            const capitalizedName = name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
            return {
                id: index + 1,
                title: `${capitalizedName} Design ${index + 1}`,
                src: `/images/${fileName}`,
                category: name.split(' ')[0]
            };
        });

        setDesigns(designsData);
    }, []);

    const handleImageClick = (clickedDesign) => {
        const index = designs.findIndex(design => design.id === clickedDesign.id);
        setPhotoIndex(index);
        setIsOpen(true);
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h2" component="h1" gutterBottom align="center">
                Our Design Gallery
            </Typography>
            <div className="gallery-grid">
                {designs.map((design) => (
                    <DesignCard
                        key={design.id}
                        design={design}
                        onClick={handleImageClick}
                    />
                ))}
            </div>

            <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                slides={designs}
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

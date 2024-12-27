// FILEPATH: /Users/jiawenwang/WebstormProjects/deepvision/src/components/VirtualDesignTool.jsx
import React, { useState, useRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { Stage, Layer, Image } from 'react-konva';
import { Button, Box, Typography, Slider } from '@mui/material';

const VirtualDesignTool = () => {
  const [image, setImage] = useState(null);
  const [color, setColor] = useState('#ffffff');
  const [opacity, setOpacity] = useState(0.5);
  const stageRef = useRef(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new window.Image();
      img.src = e.target.result;
      img.onload = () => {
        setImage(img);
      };
    };

    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleOpacityChange = (event, newValue) => {
    setOpacity(newValue);
  };

  const handleSave = () => {
    if (stageRef.current) {
      const dataURL = stageRef.current.toDataURL();
      const link = document.createElement('a');
      link.download = 'virtual-design.png';
      link.href = dataURL;
      link.click();
    }
  };

  return (
      <Box sx={{ maxWidth: 600, margin: 'auto', textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Virtual Room Designer
        </Typography>
        {!image && (
            <Box {...getRootProps()} sx={{ border: '2px dashed grey', p: 2, mb: 2 }}>
              <input {...getInputProps()} />
              <Typography>Drag and drop a room image here, or click to select a file</Typography>
            </Box>
        )}
        {image && (
            <>
              <Stage width={500} height={500} ref={stageRef}>
                <Layer>
                  <Image image={image} width={500} height={500} />
                  <Image
                      image={image}
                      width={500}
                      height={500}
                      filters={[{ name: 'RGB', args: [color] }]}
                      opacity={opacity}
                  />
                </Layer>
              </Stage>
              <Box sx={{ mt: 2 }}>
                <input type="color" value={color} onChange={handleColorChange} />
                <Typography gutterBottom>Color Opacity</Typography>
                <Slider
                    value={opacity}
                    onChange={handleOpacityChange}
                    aria-labelledby="continuous-slider"
                    min={0}
                    max={1}
                    step={0.01}
                />
                <Button variant="contained" onClick={handleSave} sx={{ mt: 2 }}>
                  Save Design
                </Button>
              </Box>
            </>
        )}
      </Box>
  );
};

export default VirtualDesignTool;

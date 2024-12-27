// FILEPATH: /Users/jiawenwang/WebstormProjects/deepvision/src/components/WhatsAppButton.jsx
import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = ({ phoneNumber, message }) => {
    const handleClick = () => {
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <Tooltip title="Contact us on WhatsApp" placement="left">
            <Fab
                color="primary"
                aria-label="whatsapp"
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    backgroundColor: '#25D366',
                }}
                onClick={handleClick}
            >
                <WhatsAppIcon />
            </Fab>
        </Tooltip>
    );
};

export default WhatsAppButton;

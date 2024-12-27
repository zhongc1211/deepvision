// FILEPATH: /Users/jiawenwang/WebstormProjects/deepvision/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import WhatsAppButton from './components/WhatsAppButton';
import VirtualDesignTool from './components/VirtualDesignTool';



const theme = createTheme({
    palette: {
        primary: {
            main: '#2c3e50',
        },
        secondary: {
            main: '#e74c3c',
        },
        background: {
            default: '#ecf0f1',
            paper: '#ffffff',
        },
    },
    typography: {
        fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '3rem',
            fontWeight: 600,
        },
        h2: {
            fontSize: '2.5rem',
            fontWeight: 500,
        },
        h3: {
            fontSize: '2rem',
            fontWeight: 500,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                    fontWeight: 500,
                    padding: '10px 20px',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                },
            },
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <Box display="flex" flexDirection="column" minHeight="100vh">
                    <Header />
                    <Box component="main" flexGrow={1} py={3}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/gallery" element={<Gallery />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/virtual-design" element={<VirtualDesignTool />} />
                        </Routes>
                    </Box>
                    <Footer />
                    <WhatsAppButton
                        phoneNumber="98895158"  // 替换为您的实际 WhatsApp 业务电话号码
                        message="Hello, I'm interested in your interior design services."
                    />
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;
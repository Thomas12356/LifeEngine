//-----Imports-----//
import { Box } from "@chakra-ui/react";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
//Pages
import Home from "@pages/Home"

export default function App() {
    return (
        <Box>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/calendar" element={<h1>Calendar</h1>} />
                </Routes>
            </BrowserRouter>
        </Box>
    )
}
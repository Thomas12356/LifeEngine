//-----Imports-----//
import { Provider } from "@/components/ui/provider"
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { Box } from "@chakra-ui/react"
//Components
import NavBar from "@/features/navbar/NavBar"
//Pages
import Home from "@pages/Home"
import Agent from "@pages/Agent"
import Profile from "@pages/Profile"
import CalendarPage from "@pages/CalendarPage"
import LoginPage from "@pages/Login"

export default function App() {
    return (
        <Provider>

            <BrowserRouter>

            <Box
                position="fixed"
                top="0"
                left="0"
                w="100vw"
                h="100vh"
                bg="radial-gradient(circle, #EDEDED, #EDEDED)"
                zIndex="-1">
            </Box>

            <Box pt={"widget.mTopBottom"} pb={"widget.mTopBottom"} pl={"widget.mLeftRight"} pr={"widget.mLeftRight"}>

                <NavBar />

                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/calendar" element={<CalendarPage />} />
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="/agent" element={<Agent />} />
                    <Route path="/" element={<Navigate to="/login" />} />

                </Routes>
            </Box>
            
            </BrowserRouter>

        </Provider>
    )
}
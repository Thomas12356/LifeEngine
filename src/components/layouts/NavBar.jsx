import { Link as ChakraLink, Icon as ChakraIcon, Text, Box, Flex, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
//components
import LifeEngineLogo from "@ui-components/LifeEngineLogo";
//test icons
import { FaBeer } from "react-icons/fa";

const NavLinkStyles = {
    display: "flex",
    alignItems:"center"
}

const NavButton = ({ to, Icon, text}) => {
    return(
        <NavLink to={to} style={{ textDecoration: 'none', display: 'block' }}>
            {({ isActive }) => (
                <Box
                    {...NavLinkStyles}
                    color={isActive ? "brand.blueLight" : "brand.gray"} 
                >
                    <ChakraIcon as={Icon} boxSize="20px" />
                    <Text>{text}</Text>
                </Box>
            )}
        </NavLink>
    )
}

export default function NavBar() {
    return(
        <Box>
            <Flex justifyContent="space-between">

                <LifeEngineLogo />

                <nav>
                    <NavButton to="/" text="Home" Icon={FaBeer} />
                    <NavButton to="/calendar" text="Calendar" Icon={FaBeer} />
                </nav>

            </Flex>
        </Box>
    )
}
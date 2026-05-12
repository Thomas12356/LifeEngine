import { Button } from '@chakra-ui/react';
import { logoutUser } from '@features/auth/utils/authService';

export default function LogoutButton(){
    function handleLogout(){
        logoutUser();
    }
    return (
        <Button onClick={handleLogout}>log Out</Button>
    )
}
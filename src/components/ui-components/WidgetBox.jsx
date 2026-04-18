import { Box } from '@chakra-ui/react';

export function WidgetBox({ children, ...props }){
    return(
        <Box
        bg={"brand.white"}
        {...props}>
            {children}
        </Box>
    );
}
import { Box } from '@chakra-ui/react';

export function WidgetBox({ children, ...props }){
    return(
        <Box
        bg={"white"}
        boxShadow={"md"}
        paddingLeft={"widget.pLeftRight"}
        paddingRight={"widget.pLeftRight"}
        paddingTop={"widget.pTopBottom"}
        paddingBottom={"widget.pTopBottom"}
        borderRadius={"widgetRadii"}
        ml={"widget.mLeftRight"}
        mr={"widget.mLeftRight"}
        mt={"widget.mTopBottom"}
        height={"fit-content"}
        {...props}>
            {children}
        </Box>
    );
}
export function WidgetBoxClear({ children, ...props }){
    return(
        <Box
        paddingLeft={"widget.pLeftRight"}
        paddingRight={"widget.pLeftRight"}
        paddingTop={"widget.pTopBottom"}
        paddingBottom={"widget.pTopBottom"}
        ml={"widget.mLeftRight"}
        mr={"widget.mLeftRight"}
        mt={"widget.mTopBottom"}
        height={"fit-content"}
        {...props}>
            {children}
        </Box>
    );
}
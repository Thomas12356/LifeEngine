import { Spinner, Text, VStack, AbsoluteCenter } from "@chakra-ui/react"

export default function LoadingScreen(){
    return(
        <AbsoluteCenter>
        <VStack >
            <Spinner size="xl" color={"blueLight.500"}/>
            <Text textStyle = "defaultGrey">Loading LifeEngine ...</Text>
        </VStack>
        </AbsoluteCenter>
    )
}
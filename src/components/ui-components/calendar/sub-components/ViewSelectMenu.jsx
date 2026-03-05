/**
 * 
 * NOTE : This is a standard drop down selection menu which could be
 * re used for other purposes. If re-used, abstract to a global drop down component and pass in the options as props.
 * 
 */

import { Menu, Portal, Button, Stack, Text, Icon } from "@chakra-ui/react"
import { FaAngleDown } from "react-icons/fa6"
import { useState } from "react"

export default function ViewSelectMenu() {

    const [view, setView] = useState("week")

    return (
        <Stack>
            <Menu.Root onSelect={(details) => setView(details.value)}>
                <Menu.Trigger asChild>
                    <Button>
                        <Text>{view.charAt(0).toUpperCase() + view.slice(1)}</Text>
                        <Icon>
                            <FaAngleDown />
                        </Icon>
                    </Button>
                </Menu.Trigger>
                <Portal>
                    <Menu.Positioner>
                        <Menu.Content>
                            <Menu.Item value="day">Day</Menu.Item>
                            <Menu.Item value="week">Week</Menu.Item>
                            <Menu.Item value="month">Month</Menu.Item>
                        </Menu.Content>
                    </Menu.Positioner>
                </Portal>
            </Menu.Root>
        </Stack>
    )
}


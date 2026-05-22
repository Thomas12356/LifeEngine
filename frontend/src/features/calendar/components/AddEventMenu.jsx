import DropDown from "@ui-components/DropDown"
import { Button, Input, Stack, Field, HStack, Collapsible, NumberInput } from "@chakra-ui/react"
import { LuChevronRight } from "react-icons/lu"

export default function AddEventMenu({ onClose }){
    return (
        <Stack gap="4">
            <Field.Root>
                <Field.Label>Event Name</Field.Label>
                <Input placeholder="e.g. Design Sync" />
            </Field.Root>

            <Field.Root>
                <Field.Label>Date</Field.Label>
                <Input type="date" />
            </Field.Root>

            <HStack>
                <Field.Root>
                    <Field.Label>Start Time</Field.Label>
                    <Input type="time" />
                </Field.Root>
                <Field.Root>
                    <Field.Label>End Time</Field.Label>
                    <Input type="time" />
                </Field.Root>
            </HStack>

            <Field.Root>
                <Field.Label>Event Type</Field.Label>
                <DropDown type={"Category"} option={0} />
            </Field.Root>
            <Collapsible.Root>
                <Collapsible.Trigger>
                    <Collapsible.Indicator>
                        <HStack>
                            Advanced Options
                            <LuChevronRight />
                        </HStack>
                    </Collapsible.Indicator>
                </Collapsible.Trigger>
                <Collapsible.Content>
                    <Field.Root>
                        <Field.Label>Priority</Field.Label>
                        <NumberInput.Root min={1} max={10}>
                            <NumberInput.Control/>
                            <NumberInput.Input/>
                        </NumberInput.Root>
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Ideal Energy</Field.Label>
                        <DropDown type={"Category"} option={0} />
                    </Field.Root>
                    <Field.Root>
                        <Field.Label>Burnout Rate</Field.Label>
                        <DropDown type={"Category"} option={0} />
                    </Field.Root>
                </Collapsible.Content>
            </Collapsible.Root>
            <Button 
                colorScheme="blue" 
                size="sm" 
                onClick={onClose}
            >
                Save to Calendar
            </Button>
        </Stack>
    )
}
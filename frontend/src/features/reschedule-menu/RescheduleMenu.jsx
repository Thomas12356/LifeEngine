import { Button, Dialog, CloseButton, Portal, Stack, Input, Field, Text} from "@chakra-ui/react";


export default function RescheduleMenu({ isOpen, onOpenChange, event }) {

    console.log(event)
    const autoReschedulable = event?.is_moveable

    return (
        <Dialog.Root 
            open={isOpen} 
            onOpenChange={(details) => onOpenChange(details.open)}
        >
            <Portal>
                <Dialog.Backdrop/>
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>
                                Reschedule {event.name}
                            </Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            <Stack>
                                <Field.Root>
                                    <Field.Label>New start time</Field.Label>
                                    <Input type="time" />
                                </Field.Root>
                                <Field.Root>
                                    <Field.Label>New end time</Field.Label>
                                    <Input type="time" />
                                </Field.Root>
                                <Button disabled={!autoReschedulable}>
                                    Auto reschedule
                                </Button>
                                {!autoReschedulable && (
                                    <Text textStyle="defaultText" fontSize="sm">
                                        To use this feature, allow auto rescheduling for this event.
                                    </Text>
                                )}
                            </Stack>
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button>
                                    Cancel
                                </Button>
                            </Dialog.ActionTrigger>
                            <Button>
                                Reschedule
                            </Button>
                        </Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton/>
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>    
        </Dialog.Root>
    )
}
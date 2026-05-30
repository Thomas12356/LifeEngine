import { Text, Stack, Field, HStack, Slider } from "@chakra-ui/react";
import { WidgetBox } from "@ui-components/WidgetBox";
import DropDown from "@ui-components/DropDown"
import { NumberInput } from "@chakra-ui/react";
import ColourPicker from "@/components/ui-components/ColourPicker";

export default function EventPreferenceWidget({...props}){

    const dummyEventTypes = [
        {
            id: 1, 
            name: "Gym",
            labelColour : "blue",
            idealEnergy : 1, 
            burnoutRate : 1, 
            priority : 1, 
            availabilityWindow : "11:00-20:00", 
            preferenceWindow : "18:00-20:00" 
        }
    ]

    return(
        <WidgetBox {...props}>
            <Stack direction={"row"}>
                <Text textStyle={"headingSolid"}>Event Preferences</Text>
                <DropDown title={""} type={"EventCategory"} placeholder={"Default"}/>
            </Stack>
            <Stack mt={"general.xsSpacing"}>
                <Field.Root>
                    <HStack>
                        <Field.Label fontWeight={"unset"}>Label colour</Field.Label>
                        <ColourPicker value={"#3182CE"}/>
                    </HStack>
                </Field.Root>
                <DropDown title={"Ideal energy"} type={"ResourceLevel"} placeholder={"Default"}/>
                <DropDown title={"Burnout rate"} type={"ResourceLevel"} placeholder={"Default"}/>
                <Field.Root>
                    <HStack>
                        <Field.Label fontWeight={"unset"}>
                            Priority
                        </Field.Label>
                        <NumberInput.Root 
                            min={1} 
                            max={10}
                            width="80px"
                        >
                            <NumberInput.Control/>
                            <NumberInput.Input/>
                        </NumberInput.Root>
                    </HStack>
                </Field.Root>
                <Field.Root>
                    <HStack width="100%" align="center">
                        <Field.Label fontWeight={"unset"}> 
                            Availability Window
                        </Field.Label>
                        <Slider.Root width="350px" defaultValue={[20, 60]} minStepsBetweenThumbs={0} step={10}>
                            <Slider.ValueText />
                            <Slider.Control>
                                <Slider.Track>
                                    <Slider.Range />
                                </Slider.Track>
                                <Slider.Thumbs />
                            </Slider.Control>
                        </Slider.Root>
                    </HStack>
                </Field.Root>
                <Field.Root>
                    <HStack width="100%" align="center">
                        <Field.Label fontWeight={"unset"}>
                            Preference Window
                        </Field.Label>
                        <Slider.Root width="350px" defaultValue={[20, 60]} minStepsBetweenThumbs={0} step={10}>
                            <Slider.ValueText />
                            <Slider.Control>
                                <Slider.Track>
                                    <Slider.Range />
                                </Slider.Track>
                                <Slider.Thumbs />
                            </Slider.Control>
                        </Slider.Root>
                    </HStack>
                </Field.Root>
            </Stack>
        </WidgetBox>
    );

}
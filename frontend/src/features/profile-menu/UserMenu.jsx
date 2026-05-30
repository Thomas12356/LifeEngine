
import { Text, Field, Input, Stack } from "@chakra-ui/react"
import { WidgetBox } from "@ui-components/WidgetBox";
import { LuSunrise } from "react-icons/lu";
import { RiMoonClearLine } from "react-icons/ri";


export default function UserMenu() {

    const user = JSON.parse(localStorage.getItem("user"))

    const dummyWakeup = "07:00"
    const dummySleep = "23:00"

    return (
        <WidgetBox>
            <Text textStyle={"headingSolid"}>
                User Preferences
            </Text>
            <Text>
                Name : {user.first_name}
            </Text>
            <Text>
                Email : {user.email}
            </Text>
            <Stack paddingTop={15}>
                <Field.Root>
                    <Field.Label>
                        Ideal wakeup time
                        <LuSunrise/>
                    </Field.Label>
                    <Input 
                        type="time"
                        value={dummyWakeup}
                    />
                </Field.Root>
                <Field.Root>
                    <Field.Label>
                        Ideal bed time
                        <RiMoonClearLine/>
                    </Field.Label>
                    <Input 
                        type="time"
                        value={dummySleep}
                    />
                </Field.Root>
            </Stack>
        </WidgetBox>
    )
}
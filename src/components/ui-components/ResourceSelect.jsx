import { HStack, Text } from "@chakra-ui/react"
import { Select } from "@chakra-ui/select"

export default function ResourceSelect({ resource, options = ['Low', "Normal", "High"] }) {
    return(
        <HStack>
            <Text>{resource}:</Text>
            <Select icon={<></>}>
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </Select>
        </HStack>
    )
}
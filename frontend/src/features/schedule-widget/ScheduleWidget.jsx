import React from 'react';
import { Box, Text, VStack, HStack } from '@chakra-ui/react';
import { WidgetBox } from '@ui-components/WidgetBox';
import { useHomepage } from '@/context/HomepageContext';
//import { fetchEvents } from "@utils/eventServices"

export default function ScheduleWidget() {
  const { todaysEvents } = useHomepage()

  function formatEventTime(time) {
    return new Date(time).toLocaleTimeString([],{
        hour:"2-digit",
        minute:"2-digit"
      }
    )
  }
  console.log(todaysEvents == false)

  if (todaysEvents == false){
    return(
      <WidgetBox
        width="100%"
        flex="1"
        minH={0}
        height="100%"
        display="flex"
        flexDirection="column"
      >
        <Text textStyle="headingSolid" mb="3">
          Todays Schedule
        </Text>
        <Text textStyle="headingSolid" color="grey.300">
          No upcoming events
        </Text>

        <Text textStyle="defaultText" color="grey.300">
          You're clear for the rest of the day.
        </Text>

      </WidgetBox>
    );
  }

  return (
    <WidgetBox
    width="100%"
    flex="1"
    minH={0}
    height="100%"
    display="flex"
    flexDirection="column"
    >
      <Text textStyle="headingSolid" mb="3">
        Todays Schedule
      </Text>

        <VStack 
            width="100%"
            height="200px" 
            overflowY="scroll" 
            p={2}
            mb={2}
            gap={5} 
            align="start" 
            css={{
                "&::-webkit-scrollbar": {
                width: "8px",
                },
                "&::-webkit-scrollbar-track": {
                background: "rgba(0, 0, 0, 0.05)", 
                borderRadius: "4px",
                },
                "&::-webkit-scrollbar-thumb": {
                background: "rgba(0, 0, 0, 0.2)", 
                borderRadius: "4px",},
            }}>

          {todaysEvents.map((event) => (
            <HStack key={event.id} spaceX="6" align="baseline">

              <Text textStyle="darkBlueText">
                {formatEventTime(event.start_time)}
              </Text>

              <Text textStyle="defaultText">
                {event.name}
              </Text>

            </HStack>
          ))}
        </VStack>
    </WidgetBox>
  );
}
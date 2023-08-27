import { Container, Stack, Text, Box, Divider, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import SkillsData from "./SkillsData"; // Import your skills data

export default function Skills({ color }) {
  return (
    <Container maxW={"3xl"} id="skills">
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        <Stack align="center" direction="row" px={4}>
          <Text color={`${color}.400`} fontWeight={800}>
            02
          </Text>
          <Text fontWeight={800}>Skills</Text>
        </Stack>
        <Divider orientation="horizontal" />

        <Tabs isFitted variant="soft-rounded" colorScheme="teal" mt={8}>
          <TabList>
            {Object.keys(SkillsData).map((category, index) => (
              <Tab key={index}>{category}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {Object.keys(SkillsData).map((category, index) => (
              <TabPanel key={index}>
                <Stack direction="column" align="center">
                  {SkillsData[category].map((skill, skillIndex) => (
                    <Text key={skillIndex} color={"gray.600"} fontSize={"xl"}>
                      {skill}
                    </Text>
                  ))}
                </Stack>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Stack>
    </Container>
  );
}

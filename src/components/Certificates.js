import { Container, Stack, Text, Box, Divider, Link, Button } from "@chakra-ui/react";
import CertificatesData from "./CertificatesData"; // Import your certificates data

export default function Certificates({ color }) {
  return (
    <Container maxW={"3xl"} id="certificates">
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        pb={{ base: 20, md: 36 }}
      >
        <Stack align="center" direction="row" px={4}>
          <Text color={`${color}.400`} fontWeight={800}>
            03
          </Text>
          <Text fontWeight={800}>Certificates</Text>
        </Stack>
        <Divider orientation="horizontal" />
        <Stack direction="column" align="center" mt={8}>
          {CertificatesData.map((certificate, index) => (
            <Box key={index} mb={4}>
              <Text fontSize="lg" fontWeight="bold" color={`${color}.500`} mb={2}>
                {certificate.title}
              </Text>
              <Text fontSize="sm" color={"gray.600"}>
                {certificate.organization}
              </Text>
              <Text fontSize="sm" color={"gray.600"}>
                {certificate.description}
              </Text>
              <Button
                as={Link}
                href={certificate.link}
                isExternal
                colorScheme={color}
                mt={2}
                size="sm"
              >
                View Certificate
              </Button>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}

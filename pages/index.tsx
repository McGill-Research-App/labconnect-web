import {
  Box,
  Code,
  Text,
  Link,
  VStack,
  Grid,
  Heading,
  Flex,
  Stack,
  Button,
  Image,
  HStack,
} from "@chakra-ui/react";
import { Chakra } from "../Chakra";
import { Layout } from "../components/Layout";
import { Logo } from "../components/Logo";
import { NextChakraLink } from "../components/NextChakraLink";

interface IndexProps {
  cookies?: string;
}

const IndexPage = ({ cookies }: IndexProps) => (
  <Chakra cookies={cookies}>
    <Layout title="Home - LabConnect">
      <Flex
        align="center"
        justify={{ base: "center", md: "space-around", xl: "space-between" }}
        direction={{ base: "column-reverse", md: "row" }}
        wrap="nowrap"
        minH="70vh"
        px={8}
        mb={16}
      >
        <Stack
          spacing={4}
          w={{ base: "80%", md: "40%" }}
          align={["center", "center", "flex-start", "flex-start"]}
        >
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="primary.800"
            textAlign={["center", "center", "left", "left"]}
          >
            Welcome to LabConnect
          </Heading>
          <Heading
            as="h2"
            size="md"
            color="primary.800"
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign={["center", "center", "left", "left"]}
          >
            Looking for research opportunities?
          </Heading>
          <Heading
            as="h2"
            size="sm"
            color="primary.800"
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign={["center", "center", "left", "left"]}
          >
            We make finding labs, professors, and research jobs that match your
            interests easy.
          </Heading>
          <HStack>
            <NextChakraLink href="/signup">
              <Button
                colorScheme="teal"
                borderRadius="8px"
                py="4"
                px="4"
                lineHeight="1"
                size="md"
              >
                Sign Up
              </Button>
            </NextChakraLink>
            <NextChakraLink href="/professors/createPosting">
              <Button
                colorScheme="teal"
                borderRadius="8px"
                py="4"
                px="4"
                lineHeight="1"
                size="md"
              >
                Create Posting
              </Button>
            </NextChakraLink>
          </HStack>
          <Text
            fontSize="xs"
            mt={2}
            textAlign="center"
            color="primary.800"
            opacity="0.6"
          >
            Made with ♥ in Ottawa + Montreal
          </Text>
        </Stack>
        <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
          {/* TODO: Make this change every X secs */}
          <Image
            src="https://i.pinimg.com/originals/04/ef/5e/04ef5e1743f2123165f573616c533885.jpg"
            size="100%"
            rounded="1rem"
            shadow="2xl"
          />
        </Box>
      </Flex>
    </Layout>
  </Chakra>
);

export default IndexPage;
export { getServerSideProps } from "../Chakra";

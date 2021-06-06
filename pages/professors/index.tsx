import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Heading,
  HStack,
  List,
  ListItem,
  Text,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import { Layout } from "../../components/Layout";
import { NextChakraLink } from "../../components/NextChakraLink";
import { Chakra } from "../../Chakra";
import data from "../../utils/prof-data.json";
import facdata from "../../utils/faculty-data.json";

interface ProfessorProps {
  cookies?: string;
}

const ProfessorsPage = ({ cookies }: ProfessorProps) => (
  <Chakra cookies={cookies}>
    <Layout title="Professors - LabConnect">
      <Heading as="h1" size="2xl" mt={20} mb={10}>
        Professors
      </Heading>

      {/* Structured as: Faculty –> Department/School –> Professor list */}
      <Accordion allowToggle>
        {facdata.map((item) => (
          <AccordionItem>
            <AccordionButton>
              <Heading my={3}>{item.faculty}</Heading>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel>
              <SimpleGrid columns={2} spacing={4}>
                {item.departments.length > 0 && (
                  <Box>
                    <Accordion allowToggle>
                      <Heading as="h3" size="lg" color="gray" my={3}>
                        Departments
                      </Heading>
                      {item.departments.map((dept) => (
                        <AccordionItem>
                          <AccordionButton>
                            <Heading my={1} as="h3" size="md">
                              {dept}
                            </Heading>
                            <AccordionIcon />
                          </AccordionButton>

                          {dept == "Pharmacology & Therapeutics" ? (
                            <AccordionPanel>
                              <List spacing={3} ml={2}>
                                {data.map((professor) => (
                                  <ListItem>
                                    <NextChakraLink
                                      href="/professors/[id]"
                                      as={`/professors/${professor.name
                                        .replace(/\s+/g, "-")
                                        .toLowerCase()}`}
                                    >
                                      <HStack spacing="3">
                                        <Text color="gray">
                                          {professor.title}
                                        </Text>
                                        <Text color="blackAlpha">
                                          {professor.name}
                                        </Text>
                                      </HStack>
                                    </NextChakraLink>
                                  </ListItem>
                                ))}
                              </List>
                            </AccordionPanel>
                          ) : (
                            <AccordionPanel>
                              (Professor list here)
                            </AccordionPanel>
                          )}
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </Box>
                )}

                {item.schools.length > 0 && (
                  <Box>
                    <Accordion allowToggle>
                      <Heading as="h3" size="lg" color="gray" my={3}>
                        Schools
                      </Heading>
                      {item.schools.map((schl) => (
                        <AccordionItem>
                          <AccordionButton>
                            <Heading my={1} as="h3" size="md">
                              {schl}
                            </Heading>
                            <AccordionIcon />
                          </AccordionButton>
                          <AccordionPanel>(Professor list here)</AccordionPanel>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </Box>
                )}
              </SimpleGrid>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Layout>
  </Chakra>
);

export default ProfessorsPage;
export { getServerSideProps } from "../../Chakra";

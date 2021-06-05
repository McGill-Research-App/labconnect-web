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
} from "@chakra-ui/react";
import { Layout } from "../../components/Layout";
import { ProfessorSummary } from "../../components/ProfessorSummary";
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

      <Accordion allowToggle>
        {facdata.map((item) => {
          return (
            <AccordionItem>
              <AccordionButton>
                <Heading my={4}>{item.faculty}</Heading>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel>
                <Accordion allowToggle>
                  {item.departments.length > 0 && (
                    <Heading as="h3" size="lg" color="gray" my={5}>
                      Departments
                    </Heading>
                  )}
                  {item.departments.map((dept) => (
                    <AccordionItem>
                      <AccordionButton>
                        <Heading my={4} as="h3" size="md">
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
                                    <Text color="gray">{professor.title}</Text>
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
                        <AccordionPanel>(Professor list here)</AccordionPanel>
                      )}
                    </AccordionItem>
                  ))}

                  {item.schools.length > 0 && (
                    <Heading as="h3" size="lg" color="gray" my={5}>
                      Schools
                    </Heading>
                  )}
                  {item.schools.map((schl) => (
                    <AccordionItem>
                      <AccordionButton>
                        <Heading my={4} as="h3" size="md">
                          {schl}
                        </Heading>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel>(Professor list here)</AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>

      {/* <AccordionItem>
          <AccordionButton>
            <Heading my={4}>Medicine and Health Sciences</Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Accordion allowMultiple defaultIndex={[0]}>
              <AccordionItem>
                <AccordionButton>
                  <Heading as="h3" size="md" my={4}>
                    Pharmacology & Therapeutics
                  </Heading>
                  <AccordionIcon />
                </AccordionButton>
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
                            <Text color="gray">{professor.title}</Text>
                            <Text color="blackAlpha">{professor.name}</Text>
                          </HStack>
                          {/* <ProfessorSummary prof={professor} /> */}
      {/* </NextChakraLink>
                      </ListItem>
                    ))}
                  </List>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </AccordionPanel>
        </AccordionItem> */}
    </Layout>
  </Chakra>
);

export default ProfessorsPage;
export { getServerSideProps } from "../../Chakra";

import {
  Box,
  Flex,
  Button,
  Grid,
  Heading,
  Image,
  Text,
  ButtonGroup,
  Link,
  Tag,
  Wrap,
  GridItem,
  SimpleGrid,
  AspectRatio,
  Stack,
  HStack,
  VStack,
  Center,
  List,
  ListIcon,
  ListItem,
  Spacer,
  Icon,
  StackDivider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import data from "../utils/prof-data.json";
import { GetStaticProps, GetStaticPaths } from "next";
import { User, ISkillTags, IInterestTags } from "../interfaces";
import { Chakra } from "../Chakra";
import {
  ArrowForwardIcon,
  EditIcon,
  EmailIcon,
  ExternalLinkIcon,
  ChevronRightIcon,
  UpDownIcon,
} from "@chakra-ui/icons";
import FullOption from "../components/FullOptionPie";

interface ProfileProps {
  cookies?: string;
}

const InterestTags: React.FC<IInterestTags> = (props) => {
  return (
    <Wrap>
      {props.tags.map((tag) => {
        return (
          <Tag size="md" variant="subtle" colorScheme="purple" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </Wrap>
  );
};

const SkillTags: React.FC<ISkillTags> = (props) => {
  return (
    <Wrap>
      {props.tags.map((tag) => {
        return (
          <Tag size="md" variant="subtle" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </Wrap>
  );
};

function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}

const ProfilePage = ({ item }: { item: User }) => (
  <Chakra>
    <Layout title={`Profile - LabConnect`}>
      <Grid
        templateColumns={["2", "1fr", "0.8fr 2fr"]}
        // templateColumns="repeat(2, 1fr)"
        // gap={[0, 2, 10]}
        templateRows="repeat(2)"
        rowGap={0}
        columnGap={[0, 2, 10]}
      >
        {/* templateColumns work in ["sm", "md", "lg"] */}
        <GridItem colSpan={2}>
          <Flex
            // pt={[2, 2, 2]}
            // pb={[4, 4, 8]}
            justifyContent="flex-end"
            // alignItems="center"
          >
            <ButtonGroup>
              <Link href="#">
                <Button
                  size="md"
                  leftIcon={<EditIcon />}
                  colorScheme="purple"
                  variant="solid"
                >
                  Edit Profile
                </Button>
              </Link>
            </ButtonGroup>
          </Flex>
        </GridItem>
        <GridItem>
          <Stack direction="column" spacing={2}>
            <Box p={4} shadow="md">
              <Heading
                // textTransform="uppercase"
                mb={2}
              >
                John Doe
              </Heading>
              <Box fontWeight="semibold" fontSize="lg" color="grey">
                <Text>McGill University</Text>
                <Text>MSc Candidate in Pharmacology</Text>
              </Box>
              <Center j>
                <Image
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQGzbA8KQ5mEGQ/profile-displayphoto-shrink_200_200/0/1566066591083?e=1629331200&v=beta&t=iahiU3Y0uASh5e52rHIBPouNimX1oWemxUCti9YqJoA"
                  alt={`alt`}
                  borderRadius="md"
                  mt={4}
                  mb={4}
                />
              </Center>
              <Box mb={4}>
                <Grid templateColumns="repeat(3, 1fr)" gap={2}>
                  <GridItem colSpan={2}>
                    <Heading
                      fontWeight="semibold"
                      fontSize="md"
                      letterSpacing="wide"
                    >
                      Resume
                    </Heading>
                    <Box>
                      <Link color="gray" fontSize="sm" href="#">
                        <Text as="u">John_Doe_Resume.pdf</Text>
                      </Link>
                      <Text color="gray" fontSize="sm">
                        Updated Jan 2021
                      </Text>
                    </Box>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <Heading
                      fontWeight="semibold"
                      fontSize="md"
                      letterSpacing="wide"
                    >
                      Links
                    </Heading>
                    <Box>
                      <Box>
                        <Link color="gray" fontSize="sm" href="#">
                          <Text as="u">LinkedIn</Text>
                        </Link>
                      </Box>
                      <Box>
                        <Link color="gray" fontSize="sm" href="#">
                          <Text as="u">Scholar</Text>
                        </Link>
                      </Box>
                    </Box>
                  </GridItem>
                </Grid>
              </Box>
            </Box>
            <Box shadow="md" p={4}>
              <Heading
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="2xl"
                mb={2}
              >
                Research Interests
              </Heading>
              <InterestTags
                tags={["Parkinson's Disease", "Mitochondrial Dysfunction", "Machine Learning/Artificial Intelligence", "PINK1", "Parkin", "Organoids"]}
              />
            </Box>
            <Box p={4} shadow="md">
              <Heading
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="2xl"
                mb={2}
              >
                Skills
              </Heading>
              <SkillTags
                tags={["TMT Labeling", "SILAC Labeling", "Python", "Excel VBA"]}
              />
            </Box>
          </Stack>
        </GridItem>
        <Box>
          <SimpleGrid rows={3} spacing={2}>
            <Box p={4} shadow="md" rounded="xl">
              <Heading
                fontWeight="bold"
                letterSpacing="wide"
                fontSize="2xl"
                mb={2}
              >
                About Me
              </Heading>
              <Box>
                <Text fontsize="lg" fontWeight="normal">
                I am a Msc student in pharmacology seeking a PHD position in Pharmacology. I have extensive experience in computational analysis of proteomics. I am familiar with various mass spectrometry-based techniques such as isobaric labeling and stable isotope labeling by amino acids in cell culture. I am very passionate about mitochondria dysfunction and its role in neurodegenerative diseases. 
                </Text>
              </Box>
            </Box>
            <Box p={4} shadow="md" rounded="xl">
              <Heading
                fontWeight="bold"
                letterSpacing="wide"
                fontSize="2xl"
                mb={4}
              >
                Experience
              </Heading>
              <VStack 
                spacing={4} align="stretch"
                divider={<StackDivider borderColor="gray.200" />}
              >
                <Box>
                  <Grid templateColumns={["2", "0.4fr 2fr"]} gap={2}>
                    <GridItem>
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/McGill_University_CoA.svg/1200px-McGill_University_CoA.svg.png"
                        alt={`alt`}
                        // borderRadius="full"
                        objectFit="scale-down"
                        boxSize="60px"
                      />
                    </GridItem>
                    <Box>
                      <Grid templateRows="repeat(5)">
                        <GridItem>
                          <Text
                            fontWeight="semibold"
                            fontSize="lg"
                            letterSpacing="wide"
                          >
                            Undergraduate Research Student (NSCI 396)
                          </Text>
                        </GridItem>
                        <GridItem>
                          <Text fontSize="md" letterSpacing="wide">
                            McGill University (Levin Lab)
                          </Text>
                        </GridItem>
                        <GridItem>
                          <Text fontSize="xs" letterSpacing="wide" color="gray">
                            Jan 2020 - Present ~ Full-Time
                          </Text>
                        </GridItem>
                        <GridItem>
                          <Text fontSize="xs" letterSpacing="wide" color="gray">
                            Montreal, Canada
                          </Text>
                        </GridItem>
                        <GridItem mt={2}>
                          <List spacing={0}>
                            <ListItem>
                              <ListIcon as={ChevronRightIcon} />
                              Computationally modeled superoxide spread in patients with Leber Hereditary Optic Neuropathy.
                            </ListItem>
                          </List>
                        </GridItem>
                      </Grid>
                    </Box>
                  </Grid>
                </Box>
                <Box>
                  <Grid templateColumns={["2", "0.4fr 2fr"]} gap={2}>
                    <GridItem>
                      <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVG3kUpHdp-flkSxgXMGCpDDjBb5c4UNdEEp2ZtKhF1m_SIDtVYUyfDisqWOYjDed45yQ&usqp=CAU"
                        alt={`alt`}
                        // borderRadius="full"
                        objectFit="scale-down"
                        boxSize="60px"
                      />
                    </GridItem>
                    <Box>
                      <Grid templateRows="repeat(5)">
                        <GridItem>
                          <Text
                            fontWeight="semibold"
                            fontSize="lg"
                            letterSpacing="wide"
                          >
                            CEO
                          </Text>
                        </GridItem>
                        <GridItem>
                          <Text fontSize="md" letterSpacing="wide">
                            LabConnect
                          </Text>
                        </GridItem>
                        <GridItem>
                          <Text fontSize="xs" letterSpacing="wide" color="gray">
                            Apr 2020 - Present ~ Full-Time
                          </Text>
                        </GridItem>
                        <GridItem>
                          <Text fontSize="xs" letterSpacing="wide" color="gray">
                            Montreal, Canada
                          </Text>
                        </GridItem>
                        <GridItem mt={2}>
                          <List spacing={0}>
                            <ListItem>
                              <ListIcon as={ChevronRightIcon} />
                              Building a web platform to help connect talent-seeking labs with ambitious students.
                            </ListItem>
                          </List>
                        </GridItem>
                      </Grid>
                    </Box>
                  </Grid>
                </Box>
                <Box>
                  <Grid templateColumns={["2", "0.4fr 2fr"]} gap={2}>
                    <GridItem>
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/McGill_University_CoA.svg/1200px-McGill_University_CoA.svg.png"
                        alt={`alt`}
                        // borderRadius="full"
                        objectFit="scale-down"
                        boxSize="60px"
                      />
                    </GridItem>
                    <Box>
                      <Grid templateRows="repeat(5)">
                        <GridItem>
                          <Text
                            fontWeight="semibold"
                            fontSize="lg"
                            letterSpacing="wide"
                          >
                            Undergraduate Honours Research Student (PHAR 598)
                          </Text>
                        </GridItem>
                        <GridItem>
                          <Text fontSize="md" letterSpacing="wide">
                            McGill University (Trempe Lab)
                          </Text>
                        </GridItem>
                        <GridItem>
                          <Text fontSize="xs" letterSpacing="wide" color="gray">
                            Sept 2019 - Apr 2020 ~ Full-Time
                          </Text>
                        </GridItem>
                        <GridItem>
                          <Text fontSize="xs" letterSpacing="wide" color="gray">
                            Montreal, Canada
                          </Text>
                        </GridItem>
                        <GridItem mt={2}>
                          <List spacing={0}>
                            <ListItem>
                              <ListIcon as={ChevronRightIcon} />
                              Project involved woking with the protein Frataxin.
                            </ListItem>
                          </List>
                        </GridItem>
                      </Grid>
                    </Box>
                  </Grid>
                </Box>
              </VStack>
            </Box>
            <Box p={4} shadow="md" rounded="xl">
              <Heading
                fontWeight="bold"
                letterSpacing="wide"
                fontSize="2xl"
                mb={4}
              >
                Projects
              </Heading>
              <VStack 
                spacing={4} align="stretch"
                divider={<StackDivider borderColor="gray.200" />}
              >
                <Box>
                  <Grid templateRows="repeat(5)">
                    <GridItem>
                      <Text
                        fontWeight="semibold"
                        fontSize="lg"
                        letterSpacing="wide"
                      >
                        Measuring Protein Turnover in Midbrain-Like Organoids 
                      </Text>
                    </GridItem>
                    {/* <GridItem>
                      <Text fontSize="md" letterSpacing="wide">
                        LabConnect
                      </Text>
                    </GridItem> */}
                    <GridItem>
                      <Text fontSize="xs" letterSpacing="wide" color="gray">
                        Sept 2020 - Present
                      </Text>
                    </GridItem>
                    <GridItem mt={2}>
                      <List spacing={0}>
                        <ListItem>
                          <ListIcon as={ChevronRightIcon} />
                            Processed all organoids and mouse lysates.
                        </ListItem>
                        <ListItem>
                          <ListIcon as={ChevronRightIcon} />
                            Prepared samples to be run on MS.
                        </ListItem>
                        <ListItem>
                          <ListIcon as={ChevronRightIcon} />
                            Calculated protein turnover using Topograph software. 
                        </ListItem>
                        <ListItem>
                          <ListIcon as={ChevronRightIcon} />
                            Performed statistical analysis.
                        </ListItem>
                      </List>
                    </GridItem>
                  </Grid>
                </Box>
                <Box>
                  <Grid templateRows="repeat(5)">
                    <GridItem>
                      <Text
                        fontWeight="semibold"
                        fontSize="lg"
                        letterSpacing="wide"
                      >
                        Identifying Novel MPP Mutations 
                      </Text>
                    </GridItem>
                    {/* <GridItem>
                      <Text fontSize="md" letterSpacing="wide">
                        LabConnect
                      </Text>
                    </GridItem> */}
                    <GridItem>
                      <Text fontSize="xs" letterSpacing="wide" color="gray">
                        Sept 2020 - Present
                      </Text>
                    </GridItem>
                    <GridItem mt={2}>
                      <List spacing={0}>
                        <ListItem>
                          <ListIcon as={ChevronRightIcon} />
                            Query through databases such as GNOMAD and ClinVar.
                        </ListItem>
                        <ListItem>
                          <ListIcon as={ChevronRightIcon} />
                            Developed scripts to analyze data from mitofates.
                        </ListItem>
                        <ListItem>
                          <ListIcon as={ChevronRightIcon} />
                            Performed statistical analysis to identify novel MPP mutations in relation to the MPP cleavage site. 
                        </ListItem>
                      </List>
                    </GridItem>
                  </Grid>
                </Box>
              </VStack>
            </Box>
            <Box p={4} shadow="md" rounded="xl">
              <Heading
                fontWeight="bold"
                letterSpacing="wide"
                fontSize="2xl"
                mb={4}
              >
                Education
              </Heading>
              <VStack 
                spacing={4} align="stretch"
                divider={<StackDivider borderColor="gray.200" />}
              >
                <Box>
                  <Grid templateColumns={["2", "0.4fr 2fr"]} gap={2}>
                    <GridItem>
                      <Image
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/McGill_University_CoA.svg/1200px-McGill_University_CoA.svg.png"
                        alt={`alt`}
                        // borderRadius="full"
                        objectFit="scale-down"
                        boxSize="60px"
                      />
                    </GridItem>
                    <Box>
                      <Grid templateRows="repeat(6)">
                        <GridItem>
                          <Text
                            fontWeight="semibold"
                            fontSize="lg"
                            letterSpacing="wide"
                          >
                            M.Sc. in Pharmacology
                          </Text>
                        </GridItem>
                        <GridItem>
                          <Text fontSize="md" letterSpacing="wide">
                            McGill University
                          </Text>
                        </GridItem>
                        <GridItem>
                          <Text fontSize="xs" letterSpacing="wide" color="gray">
                            Sept 2020 - Present ~ Full-Time
                          </Text>
                        </GridItem>
                        {/* <GridItem>
                          <Text fontSize="xs" letterSpacing="wide" color="gray">
                            Montreal, Canada
                          </Text>
                        </GridItem> */}
                        <GridItem mt={1}>
                          <Text fontStyle="semibold" letterSpacing="wide" fontSize="sm">
                            GPA: 3.8/4.0
                          </Text>
                        </GridItem>
                        <GridItem mt={2}>
                          <List spacing={0}>
                            <ListItem>
                              <ListIcon as={ChevronRightIcon} />
                              Studying protein turnover in midbrain-like organoids using stable isotope labeling and mass spectrometry.
                            </ListItem>
                          </List>
                        </GridItem>
                      </Grid>
                    </Box>
                  </Grid>
                </Box>
                <Box>
                  <Grid templateColumns={["2", "0.4fr 2fr"]} gap={2}>
                    <GridItem>
                      <Image
                        src="https://uwaterloo.ca/engineering/sites/ca.engineering/files/styles/body-500px-wide/public/uploads/images/picture1.png?itok=g5UZKYmv"
                        alt={`alt`}
                        // borderRadius="full"
                        objectFit="scale-down"
                        boxSize="60px"
                      />
                    </GridItem>
                    <Box>
                      <Grid templateRows="repeat(6)">
                        <GridItem>
                          <Text
                            fontWeight="semibold"
                            fontSize="lg"
                            letterSpacing="wide"
                          >
                            B.Sc. in Health Studies
                          </Text>
                        </GridItem>
                        <GridItem>
                          <Text fontSize="md" letterSpacing="wide">
                            University of Waterloo
                          </Text>
                        </GridItem>
                        <GridItem>
                          <Text fontSize="xs" letterSpacing="wide" color="gray">
                            Sept 2016 - May 2020 ~ Full-Time
                          </Text>
                        </GridItem>
                        {/* <GridItem>
                          <Text fontSize="xs" letterSpacing="wide" color="gray">
                            Montreal, Canada
                          </Text>
                        </GridItem> */}
                        <GridItem mt={1}>
                          <Text fontStyle="semibold" letterSpacing="wide" fontSize="sm">
                            GPA: 4.0/4.0
                          </Text>
                        </GridItem>
                        <GridItem mt={2}>
                          <List spacing={0}>
                            <ListItem>
                              <ListIcon as={ChevronRightIcon} />
                              Thesis: Using Reinforcement Learning to Simulate Protein Interactions
                            </ListItem>
                          </List>
                        </GridItem>
                      </Grid>
                    </Box>
                  </Grid>
                </Box>
              </VStack>
              </Box>
            <Box p={4} shadow="md" rounded="xl">
              <Heading
                fontWeight="bold"
                letterSpacing="wide"
                fontSize="2xl"
                mb={4}
              >
                Achievements
              </Heading>

              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <AccordionButton _expanded={{ bg: "gray.100", color: "black" }}>
                    <Box flex="auto" textAlign="left">
                      <Text fontWeight="bold" fontSize="xl">
                        3
                      </Text>
                    </Box>

                    <Box flex="auto" textAlign="left">
                      <Text
                      fontWeight="semibold"
                      fontSize="lg"
                      letterSpacing="wide"
                      >
                        Publications
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel pb={4}>
                    <VStack
                      divider={<StackDivider borderColor="gray.200" />}
                      spacing={4}
                      align="stretch"
                    >
                      <Box>
                        <Grid templateRows="repeat(6)">
                          <GridItem>
                            <Text
                              fontWeight="semibold"
                              fontSize="lg"
                              letterSpacing="wide"
                            >
                              Proteomic Profiling of Mitochondrial-Derived Vesicles in Brain Reveals Enrichment of Respiratory Complex Sub-assemblies and Small TIM Chaperones 
                            </Text>
                          </GridItem>
                          <GridItem>
                            <Text fontSize="md" letterSpacing="wide" color="gray">
                              Journal of Proteome
                            </Text>
                          </GridItem>
                          <GridItem>
                            <Text fontSize="xs" letterSpacing="wide" color="gray">
                              Roberts Smith, Jerred Bear, John Doe
                            </Text>
                          </GridItem>
                          <GridItem>
                            <Text fontSize="xs" letterSpacing="wide" color="gray">
                              2021
                            </Text>
                          </GridItem>
                          <GridItem mt={2}>
                            <Link 
                              href="https://doi.org/10.1021/acs.jproteome.0c0050" isExternal
                              color="purple"
                            >
                              See paper <ExternalLinkIcon mx="2px" />
                            </Link>
                          </GridItem>
                        </Grid>
                      </Box>

                      <Box>
                        <Grid templateRows="repeat(6)">
                          <GridItem>
                            <Text
                              fontWeight="semibold"
                              fontSize="lg"
                              letterSpacing="wide"
                            >
                              Crystal structure of human PACRG in complex with MEIG1 reveals roles in axoneme formation and tubulin binding
                            </Text>
                          </GridItem>
                          <GridItem>
                            <Text fontSize="md" letterSpacing="wide" color="gray">
                              Structure
                            </Text>
                          </GridItem>
                          <GridItem>
                            <Text fontSize="xs" letterSpacing="wide" color="gray">
                              Nimra Khan, Jean-François Trempe, John Doe
                            </Text>
                          </GridItem>
                          <GridItem>
                            <Text fontSize="xs" letterSpacing="wide" color="gray">
                              2021
                            </Text>
                          </GridItem>
                          <GridItem mt={2}>
                            <Link 
                              href="https://doi.org/10.1016/j.str.2021.01.001" isExternal
                              color="purple"
                            >
                              See paper <ExternalLinkIcon mx="2px" />
                            </Link>
                          </GridItem>
                        </Grid>
                      </Box>

                      <Box>
                        <Grid templateRows="repeat(6)">
                          <GridItem>
                            <Text
                              fontWeight="semibold"
                              fontSize="lg"
                              letterSpacing="wide"
                            >
                              Mechanisms of PINK1, ubiquitin and Parkin interactions in mitochondrial quality control and beyond
                            </Text>
                          </GridItem>
                          <GridItem>
                            <Text fontSize="md" letterSpacing="wide" color="gray">
                              Cellular and Molecular Life Sciences 
                            </Text>
                          </GridItem>
                          <GridItem>
                            <Text fontSize="xs" letterSpacing="wide" color="gray">
                              Andrew N. Bayne, Jean-François Trempe, John Doe
                            </Text>
                          </GridItem>
                          <GridItem>
                            <Text fontSize="xs" letterSpacing="wide" color="gray">
                              2019
                            </Text>
                          </GridItem>
                          <GridItem mt={2}>
                            <Link 
                              href="https://doi.org/10.1007/s00018-019-03203-4" isExternal
                              color="purple"
                            >
                              See paper <ExternalLinkIcon mx="2px" />
                            </Link>
                          </GridItem>
                        </Grid>
                      </Box>
                    </VStack>
                  </AccordionPanel>

                </AccordionItem>

                <AccordionItem>
                  <AccordionButton _expanded={{ bg: "gray.100", color: "black" }}>
                    <Box flex="auto" textAlign="left">
                      <Text fontWeight="bold" fontSize="xl">
                        1
                      </Text>
                    </Box>

                    <Box flex="auto" textAlign="left">
                      <Text
                      fontWeight="semibold"
                      fontSize="lg"
                      letterSpacing="wide"
                      >
                        Conferences
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel pb={4}>
                    <VStack
                      divider={<StackDivider borderColor="gray.200" />}
                      spacing={4}
                      align="stretch"
                    >
                      <Box>
                        <Grid templateRows="repeat(6)">
                          <GridItem>
                            <Text
                              fontWeight="semibold"
                              fontSize="lg"
                              letterSpacing="wide"
                            >
                              Measuring Protein Turnover in Mammalian Models of Parkinson’s Disease
                            </Text>
                          </GridItem>
                          <GridItem>
                            <Text fontSize="md" letterSpacing="wide" color="gray">
                              Canadian Society of Molecular Biosciences
                            </Text>
                          </GridItem>
                          <GridItem>
                            <Text fontSize="xs" letterSpacing="wide" color="gray">
                              2021
                            </Text>
                          </GridItem>
                        </Grid>
                      </Box>
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionButton _expanded={{ bg: "gray.100", color: "black" }}>
                    <Box flex="auto" textAlign="left">
                      <Text fontWeight="bold" fontSize="xl">
                        2
                      </Text>
                    </Box>

                    <Box flex="auto" textAlign="left">
                      <Text
                      fontWeight="semibold"
                      fontSize="lg"
                      letterSpacing="wide"
                      >
                        Awards
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel pb={4}>
                    <VStack
                      divider={<StackDivider borderColor="gray.200" />}
                      spacing={4}
                      align="stretch"
                    >
                      <Box>
                        <Grid templateRows="repeat(6)">
                          <GridItem>
                            <Text
                              fontWeight="semibold"
                              fontSize="lg"
                              letterSpacing="wide"
                            >
                              CGS-M CIHR
                            </Text>
                          </GridItem>
                          <GridItem>
                            <Text fontSize="md" letterSpacing="wide" color="gray">
                              CIHR, NSERC, and SSHRC
                            </Text>
                          </GridItem>
                          <GridItem>
                            <Text fontSize="xs" letterSpacing="wide" color="gray">
                              2020
                            </Text>
                          </GridItem>
                          <GridItem mt={2}>
                            <List spacing={0}>
                              <ListItem>
                                <ListIcon as={ChevronRightIcon} />
                                The CGS-M scholarship is administered jointly by Canada’s three granting agencies: CIHR, NSERC and SSHRC
                              </ListItem>
                            </List>
                          </GridItem>
                          <GridItem mt={2}>
                            <List spacing={0}>
                              <ListItem>
                                <ListIcon as={ChevronRightIcon} />
                                Value of $17,500
                              </ListItem>
                            </List>
                          </GridItem>
                        
                        </Grid>
                      </Box>

                      <Box>
                        <Grid templateRows="repeat(6)">
                          <GridItem>
                            <Text
                              fontWeight="semibold"
                              fontSize="lg"
                              letterSpacing="wide"
                            >
                              Graduate Student Excellence Award
                            </Text>
                          </GridItem>
                          <GridItem>
                            <Text fontSize="md" letterSpacing="wide" color="gray">
                              McGill
                            </Text>
                          </GridItem>
                          <GridItem>
                            <Text fontSize="xs" letterSpacing="wide" color="gray">
                              2020
                            </Text>
                          </GridItem>
                          <GridItem mt={2}>
                            <List spacing={0}>
                              <ListItem>
                                <ListIcon as={ChevronRightIcon} />
                                Value of $1000
                              </ListItem>
                            </List>
                          </GridItem>
                        
                        </Grid>
                      </Box>
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </SimpleGrid>
        </Box>
      </Grid>
    </Layout>
  </Chakra>
);

export default ProfilePage;

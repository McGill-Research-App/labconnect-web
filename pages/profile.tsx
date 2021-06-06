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
              <Box alignItems="center">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/en/d/d5/Professor_%28Money_Heist%29.jpg"
                  alt={`alt`}
                  borderRadius="md"
                  mt={4}
                  mb={4}
                />
              </Box>
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
                tags={["Parkinson's Disease", "Mitochondrial Dysfunction"]}
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
                tags={["Mass Spectrometry", "X-ray Crystallography", "NMR"]}
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
                  I am passionate about mitochondria.
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
                          Undergraduate Research Assistant
                        </Text>
                      </GridItem>
                      <GridItem>
                        <Text fontSize="md" letterSpacing="wide">
                          McGill
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit
                          </ListItem>
                        </List>
                      </GridItem>
                    </Grid>
                  </Box>
                </Grid>
              </Box>
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
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit
                          </ListItem>
                        </List>
                      </GridItem>
                    </Grid>
                  </Box>
                </Grid>
              </Box>
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
              <SimpleGrid rows={4} columns={3} rowGap={6}>
                <Box>
                  <Text fontWeight="bold" textAlign="center" fontSize="xl">
                    4
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontWeight="semibold"
                    fontSize="lg"
                    letterSpacing="wide"
                    textAlign="center"
                  >
                    Publications
                  </Text>
                </Box>
                <Box>
                  <Center>
                    <Button variant="ghost" size="sm">
                      <Icon href="" as={UpDownIcon} />
                    </Button>
                  </Center>
                </Box>
                <Box>
                  <Text fontWeight="bold" textAlign="center" fontSize="xl">
                    3
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontWeight="semibold"
                    fontSize="lg"
                    letterSpacing="wide"
                    textAlign="center"
                  >
                    Conferences
                  </Text>
                </Box>
                <Box>
                  <Center>
                    <Button variant="ghost" size="sm">
                      <Icon href="" as={UpDownIcon} />
                    </Button>
                  </Center>
                </Box>
                <Box>
                  <Text fontWeight="bold" textAlign="center" fontSize="xl">
                    1
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontWeight="semibold"
                    fontSize="lg"
                    letterSpacing="wide"
                    textAlign="center"
                  >
                    Patents
                  </Text>
                </Box>
                <Box>
                  <Center>
                    <Button variant="ghost" size="sm">
                      <Icon href="" as={UpDownIcon} />
                    </Button>
                  </Center>
                </Box>
                <Box>
                  <Text fontWeight="bold" textAlign="center" fontSize="xl">
                    6
                  </Text>
                </Box>
                <Box>
                  <Text
                    fontWeight="semibold"
                    fontSize="lg"
                    letterSpacing="wide"
                    textAlign="center"
                  >
                    Awards
                  </Text>
                </Box>
                <Box>
                  <Center>
                    <Button variant="ghost" size="sm">
                      <Icon href="" as={UpDownIcon} />
                    </Button>
                  </Center>
                </Box>
              </SimpleGrid>
            </Box>
          </SimpleGrid>
        </Box>
      </Grid>
    </Layout>
  </Chakra>
);

export default ProfilePage;

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
  VStack,
} from "@chakra-ui/react";
import { Layout } from "../../components/Layout";
import data from "../../utils/prof-data.json";
import { GetStaticProps, GetStaticPaths } from "next";
import { Professor, IResearchTags, ITechniqueTags } from "../../interfaces";
import { Chakra } from "../../Chakra";
import {
  ArrowForwardIcon,
  EmailIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import FullOption from "../../components/FullOptionPie";

const ResearchTags: React.FC<IResearchTags> = (props) => {
  return (
    <VStack align="left" my={2}>
      <Heading as="h4" size="sm" color="purple">
        Research Topics
      </Heading>
      <Wrap my={1}>
        {props.tags.map((tag) => {
          return (
            <Tag size="lg" variant="subtle" colorScheme="purple" key={tag}>
              {tag}
            </Tag>
          );
        })}
      </Wrap>
    </VStack>
  );
};

const TechniqueTags: React.FC<ITechniqueTags> = (props) => {
  return (
    <VStack align="left" my={2} mt={2}>
      <Heading as="h4" size="sm" color="orange.500">
        Techniques
      </Heading>
      <Wrap my={1}>
        {props.tags.map((tag) => {
          return (
            <Tag size="lg" variant="subtle" colorScheme="orange" key={tag}>
              {tag}
            </Tag>
          );
        })}
      </Wrap>
    </VStack>
  );
};

const ProfessorsPage = ({ item }: { item: Professor }) => (
  <Chakra>
    <Layout title={`${item.name} - LabConnect`}>
      <Grid templateColumns={["1fr", "1fr", "0.8fr 2fr"]} gap={[0, 2, 10]}>
        {/* templateColumns work in ["sm", "md", "lg"] */}
        <Box>
          <Heading>{item.name.toUpperCase()}</Heading>
          <Heading size="lg" mb={4}>
            {item.title}
          </Heading>
          <Box alignItems="baseline">
            <Box
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="m"
              textTransform="uppercase"
            >
              <Link href="/professors">
                <Box color="grey">
                  Department of Pharmacology & Therapeutics
                </Box>
              </Link>
            </Box>
          </Box>
          {item.name == "Jean-François Trempe" ? (
            <Image
              src="https://www.mcgill.ca/pharma/files/pharma/jf_trempe.jpg"
              alt={`${item.name}`}
              borderRadius="md"
              mt={4}
              mb={4}
            />
          ) : (
            <Image
              src="https://upload.wikimedia.org/wikipedia/en/d/d5/Professor_%28Money_Heist%29.jpg"
              alt={`${item.name}`}
              borderRadius="md"
              mt={4}
              mb={4}
            />
          )}
          <ResearchTags tags={["Parkinson's Disease", "PINK1", "Parkin"]} />
          <div></div>
          <TechniqueTags
            tags={["Mass Spectrometry", "X-ray Crystallography", "NMR"]}
          />
        </Box>
        <Box>
          <Flex
            pt={[2, 2, 2]}
            pb={[4, 4, 8]}
            justifyContent="flex-end"
            alignItems="center"
          >
            <ButtonGroup>
              <Link href={`${item.site}`}>
                <Button
                  size="lg"
                  leftIcon={<ExternalLinkIcon />}
                  colorScheme="purple"
                  variant="outline"
                >
                  External Site
                </Button>
              </Link>
              <Link href={`mailto:${item.email}`}>
                <Button
                  size="lg"
                  leftIcon={<EmailIcon />}
                  colorScheme="purple"
                  variant="outline"
                >
                  Email
                </Button>
              </Link>
              <Link href="#">
                <Button
                  size="lg"
                  leftIcon={<ArrowForwardIcon />}
                  colorScheme="purple"
                  variant="solid"
                >
                  Apply
                </Button>
              </Link>
            </ButtonGroup>
          </Flex>
          <Box>
            <Grid gridTemplateColumns="2fr 1fr">
              <Box>
                <Heading mb={2} size="lg" color="teal">
                  Info
                </Heading>
                <Text whiteSpace="pre-line">{item.address}</Text>
                <br />

                <Flex>
                  <Text as="i" mr={2}>
                    Tel:
                  </Text>
                  <Text>{item.tel}</Text>
                </Flex>

                {item.fax && (
                  <Flex alignItems="baseline">
                    <Text as="i" mr={2}>
                      Fax:{" "}
                    </Text>
                    <Text>{item.fax}</Text>
                  </Flex>
                )}

                <Flex>
                  <Link color="teal" href={`mailto:${item.email}`}>
                    Email
                  </Link>
                </Flex>

                <Flex>
                  <Link color="teal" href={item.publications} isTruncated>
                    Publications
                  </Link>
                </Flex>
              </Box>
              <Box mt={4}>
                <Heading align="centre" size="md">Lab Distribution</Heading>
                <FullOption
                  data={[
                    { title: "RA", value: 11, color: "#E9D8FD" },
                    { title: "PDF", value: 22, color: "#6B46C1" },
                    { title: "PhD", value: 11, color: "#9F7AEA" },
                    { title: "MSc", value: 44, color: "#B794F4" },
                    { title: "BSc", value: 11, color: "#D6BCFA" },
                  ]}
                />
              </Box>
            </Grid>

            {item.education && (
              <Box mt={6}>
                <Heading size="lg" mb={2} color="teal">
                  Education
                </Heading>
                <Text>{item.education}</Text>
              </Box>
            )}
            {item.research && (
              <Box mt={6}>
                <Heading size="lg" mb={2} color="teal">
                  Research
                </Heading>
                <Text>{item.research}</Text>
              </Box>
            )}
          </Box>
        </Box>
      </Grid>
    </Layout>
  </Chakra>
);

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on professors
  const paths = data.map((prof) => ({
    params: { id: prof.name.replace(/\s+/g, "-").toLowerCase() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const item = data.find(
      (p) => p.name.replace(/\s+/g, "-").toLowerCase() === id
    );
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { item } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};

export default ProfessorsPage;

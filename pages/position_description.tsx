
import { Layout } from "../components/Layout";
import { User } from "../interfaces";
import { Chakra } from "../Chakra";

import {
  Tag,
  HStack,
  Text,
  Center,
  Stack,
  Divider
} from "@chakra-ui/react"

import { TimeIcon } from '@chakra-ui/icons'

  const PositionsListing = ({ item }: { item: User }) => (
    <Chakra>
      <Layout title={`Positions - LabConnect`}>
        <Center>
      
          <Stack w="75%" padding="16px">
            <Stack borderRadius="md" border="1px" borderColor="gray.200" padding="16px">
              <img width="60px" height="60px" src="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/McGill_University_CoA.svg/1200px-McGill_University_CoA.svg.png"/>
              <Text fontSize="2xl">PhD Position</Text>
              <Text>
                McGill University • Montreal, Quebec, Canada
              </Text>
              <HStack>
                <Text color="green">
                  2 hours ago
                </Text>
                <TimeIcon color="green"/>
              </HStack>
              <HStack spacing={4}>
                  <Tag size="md" key="1" variant="solid" colorScheme="teal">
                    Therapeutic development
                  </Tag>
                  <Tag size="md" key="1" variant="solid" colorScheme="teal">
                    Molecular Genetics
                  </Tag>
                  <Tag size="md" key="1" variant="solid" colorScheme="orange">
                    mRNA
                  </Tag>
                  <Tag size="md" key="1" variant="solid" colorScheme="orange">
                    Omics approaches
                  </Tag>
                  <Tag size="md" key="1" variant="solid" colorScheme="orange">
                    CRISPr CAS9
                  </Tag>
              </HStack>
            </Stack>

            <Text fontSize="2xl">Project Name</Text>
            <Text>
              Fundamental research: physiological and pathological functions of proteins encoded in non-canonical open reading frames
            </Text>

            <Divider/>

            <Text fontSize="2xl">Department/Processor</Text>
            <Text>
            Vanderperre laboratory | Department of Biological Sciences 
            </Text>

            <Divider/>

            <Text fontSize="2xl">Our research</Text>
            <Text>
              What are the functions of these new proteins at the molecular, cellular and whole organism levels in various
              contexts? How does this multi-coding potential of eukaryotic genes affect our understanding of their physiological and
              pathological functions? What are the relationships between the distinct proteins encoded in the same gene? To answer
              these questions, we combine genetic engineering, functional genomics (genome wide CRISPR/Cas9 screening,
              transcriptomics, proteomics), and biochemical approaches, in cultured cells and model organisms (mice, worm). Our
              discoveries generate new knowledge in molecular genetics and could pave the way for innovative therapeutic strategies for
              various diseases
            </Text>

            <Divider/>

            <Text fontSize="2xl">Looking for</Text>
            <Text>
              We are looking for a PhD student and a postdoctoral researcher to characterize new alternative proteins, using candidate gene or genome scale approaches, mainly using cultured cells and/or mice. The research project will require the use of a large panel of state-of-the-art techniques in molecular and cellular biology, as well as “omics” approaches
            </Text>

            <Divider/>

            <Text fontSize="2xl">Prerequisites</Text>
            <Text>
              Experience in a relevant field with first-author publications, and a strong interest in taking up challenges associated with a new research field. Expertise in molecular biology, cellular biology and/or genomics is an asset. The selected individuals will be independent, proficient in teamwork, and proactive. Our lab promotes equity, diversity and inclusion: all profiles will be considered.
            </Text>

            <Divider/>

            <Text fontSize="2xl">Funding</Text>
            <Text>
              NSERC, CERMO-FC
            </Text>
              
          </Stack>
        </Center>
      </Layout>
    </Chakra>
  );
  
  export default PositionsListing;
  
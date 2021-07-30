import {
    Tr,
    Td,
    IconButton,
    Text,
    Link,
    HStack,
    Stack,
    Tag,
    Center,
} from "@chakra-ui/react"
import React from 'react';
import { AddIcon, InfoOutlineIcon, TimeIcon } from '@chakra-ui/icons'

function ListingRow(props) {
    const toggleDescription = () => {
        setShowDescription(!showDescription)
    }

    const [showDescription, setShowDescription] = React.useState(false)

    return (
        <>
            <Tr onClick={toggleDescription} cursor="pointer">
                <Td><Link href="/position_description">{props.position.department}</Link></Td>
                <Td><Link>{props.position.professor}</Link></Td>
                <Td><Link>{props.position.title}</Link></Td>
                <Td><IconButton aria-label="Save posting" icon={<AddIcon/>} colorScheme="pink"/></Td>
                <Td><Link href="/position_description"><IconButton aria-label="See posting" icon={<InfoOutlineIcon/>}  colorScheme="blue"/></Link></Td>
            </Tr>
            { showDescription && <Tr>
                <Td colSPan="5">
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
                                <Text fontSize="2xl" paddingBottom="20px">Summary</Text>
                                <Text>
                                    What are the functions of these new proteins at the molecular, cellular and whole organism levels in various
                                    contexts? How does this multi-coding potential of eukaryotic genes affect our understanding of their physiological and
                                    pathological functions? What are the relationships between the distinct proteins encoded in the same gene? To answer
                                    these questions, we combine genetic engineering, functional genomics (genome wide CRISPR/Cas9 screening,
                                    transcriptomics, proteomics), and biochemical approaches, in cultured cells and model organisms (mice, worm). Our
                                    discoveries generate new knowledge in molecular genetics and could pave the way for innovative therapeutic strategies for
                                    various diseases
                                </Text>

                                <Text fontSize="5xl" textAlign="center">...</Text>
                            </Stack>
                        </Stack>
                    </Center>
                </Td>
            </Tr> }
        </>


    );
}

export default ListingRow;
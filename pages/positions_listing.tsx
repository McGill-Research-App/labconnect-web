
  import { Layout } from "../components/Layout";
  import { User } from "../interfaces";
  import { Chakra } from "../Chakra";
  import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    InputGroup,
    InputLeftElement,
    IconButton,
    Text,
    Center,
    Stack,
    Input,
    Divider,
    Flex,
    Button,
    Spacer,
    Link,
    LinkOverlay,
    LinkBox,
    Box
  } from "@chakra-ui/react"
  
  import { SearchIcon, AddIcon, InfoOutlineIcon } from '@chakra-ui/icons'
  
  const PositionsListing = ({ item }: { item: User }) => (
    <Chakra>
      <Layout title={`Positions - LabConnect`}>
        <Center>
            <Stack width="75%">
                <Flex>                
                    <InputGroup>
                        <InputLeftElement
                        pointerEvents="none"
                        children={<SearchIcon color="gray.300" />}
                        />
                        <Input type="tel" placeholder="Search..." />
                    </InputGroup>

                    <Spacer/>
                    <Button colorScheme="blue" marginLeft="4px" href="/profile"> Postions </Button>
                    <Button colorScheme="blue" marginLeft="4px"> Filter </Button>

                </Flex>


                <Divider paddingTop="100px"/>

                <Text fontSize="2xl">Recommended For You</Text>

                
                <Table variant="simple">
                    <Thead>
                    <Tr href="/profile">
                        <Th>Department</Th>
                        <Th>Professor</Th>
                        <Th>Position</Th>
                        <Th></Th>
                        <Th></Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td><Link href="/position_description">Biochemistry</Link></Td>
                            <Td><Link>Bastien Castagner</Link></Td>
                            <Td><Link>PhD</Link></Td>
                            <Td><IconButton aria-label="Search database" icon={<AddIcon/>} colorScheme="pink"/></Td>
                            <Td><Link href="/position_description"><IconButton aria-label="Search database" icon={<InfoOutlineIcon/>}  colorScheme="blue"/></Link></Td>
                        </Tr>
                    <Tr>
                        <Td><Link href="/position_description">Biochemistry</Link></Td>
                        <Td><Link href="/position_description">Libbi Swanson</Link></Td>
                        <Td><Link href="/position_description">PhD </Link></Td>
                        <Td><IconButton aria-label="Search database" icon={<AddIcon/>} colorScheme="pink"/></Td>
                        <Td><Link href="/position_description"><IconButton aria-label="Search database" icon={<InfoOutlineIcon/>}  colorScheme="blue"/></Link></Td>
                    </Tr>
                    <Tr>
                        <Td><Link href="/position_description">Neuroscience</Link></Td>
                        <Td><Link href="/position_description">Jakob Ridley</Link></Td>
                        <Td><Link href="/position_description">MSc</Link></Td>
                        <Td><IconButton aria-label="Search database" icon={<AddIcon/>} colorScheme="pink"/></Td>
                        <Td><Link href="/position_description"><IconButton aria-label="Search database" icon={<InfoOutlineIcon/>}  colorScheme="blue"/></Link></Td>
                    </Tr>
                    </Tbody>
                </Table>

                <Divider paddingTop="100px"/>

                <Text fontSize="2xl">Biochemistry</Text>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Department</Th>
                            <Th>Professor</Th>
                            <Th>Position</Th>
                            <Th></Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td><Link href="/position_description">Biochemistry</Link></Td>
                            <Td><Link href="/position_description">Kalle Gehring</Link></Td>
                            <Td><Link href="/position_description">Undergraduate</Link></Td>
                            <Td><IconButton aria-label="Search database" icon={<AddIcon/>} colorScheme="pink"/></Td>
                            <Td><Link href="/position_description"><IconButton aria-label="Search database" icon={<InfoOutlineIcon/>}  colorScheme="blue"/></Link></Td>
                        </Tr>
                        <Tr>
                            <Td><Link href="/position_description">Biochemistry</Link></Td>
                            <Td><Link href="/position_description">Jerry Pelletier</Link></Td>
                            <Td><Link href="/position_description">MSc</Link></Td>
                            <Td><Link href="/position_description"><IconButton aria-label="Search database" icon={<AddIcon/>} colorScheme="pink"/></Link></Td>
                            <Td><Link href="/position_description"><IconButton aria-label="Search database" icon={<InfoOutlineIcon/>}  colorScheme="blue"/></Link></Td>
                        </Tr>
                        <Tr>
                            <Td><Link href="/position_description">Biochemistry</Link></Td>
                            <Td><Link href="/position_description">Cataleya Ortega</Link></Td>
                            <Td><Link href="/position_description">PhD</Link></Td>
                            <Td><IconButton aria-label="Search database" icon={<AddIcon/>} colorScheme="pink"/></Td>
                            <Td><Link href="/position_description"><IconButton aria-label="Search database" icon={<InfoOutlineIcon/>}  colorScheme="blue"/></Link></Td>
                        </Tr>
                    </Tbody>
                </Table>

                <Divider paddingTop="100px"/>

                <Text fontSize="2xl">Neuroscience</Text>
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            <Th>Department</Th>
                            <Th>Professor</Th>
                            <Th>Position</Th>
                            <Th></Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td><Link href="/position_description">Neuroscience</Link></Td>
                            <Td><Link href="/position_description">Ted Fon</Link></Td>
                            <Td><Link href="/position_description">PhD</Link></Td>
                            <Td><IconButton aria-label="Search database" icon={<AddIcon/>} colorScheme="pink"/></Td>
                            <Td><Link href="/position_description"><IconButton aria-label="Search database" icon={<InfoOutlineIcon/>}  colorScheme="blue"/></Link></Td>
                        </Tr>
                    </Tbody>
                </Table>
                <Divider paddingTop="100px"/>
            </Stack>
        </Center>
      </Layout>
    </Chakra>
  );
  
  export default PositionsListing;
  
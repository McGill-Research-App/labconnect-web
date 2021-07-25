import { Layout } from "../components/Layout";
import { User, Position } from "../interfaces";
import { Chakra } from "../Chakra";
import {
    InputGroup,
    InputLeftElement,
    Center,
    Stack,
    Input,
    Flex,
    Button,
    Spacer,
} from "@chakra-ui/react"
import React from 'react';
import { SearchIcon} from '@chakra-ui/icons'
import ListingTable from "../components/ListingTable"

function PositionsListing({ item }: { item: User }) {
    const [searchText, setSearchText] = React.useState("")
    const handleChange = (event) => setSearchText(event.target.value)
    const positions: Position[] = [
        { department: "Biochemistry", professor: "Bastien Castagner", title: "PhD" },
        { department: "Biochemistry", professor: "Libbi Swanson", title: "PhD" },
        { department: "Neuroscience", professor: "Jakob Ridley", title: "MSc" }
    ]
    const filteredPositions = positions.filter((position: Position) => {
        for (const property in position) {                
            if (searchText.toUpperCase() == position[property].substring(0, searchText.length).toUpperCase()) return true 
        }

        return false 
    })

    return (
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
                                <Input value={searchText} type="tel" placeholder="Search positions..." onChange={handleChange}/>
                            </InputGroup>
                            <Spacer/>
                            <Button colorScheme="blue" marginLeft="4px" href="/profile"> Postions </Button>
                            <Button colorScheme="blue" marginLeft="4px"> Filter </Button>
                        </Flex>
                        <ListingTable positions={filteredPositions} title="Recommended For You"/>
                        <ListingTable positions={filteredPositions} title="Biochemistry"/>
                        <ListingTable positions={filteredPositions} title="Neuroscience"/>
                    </Stack>
                </Center>
            </Layout>
        </Chakra>
    );
}

export default PositionsListing;
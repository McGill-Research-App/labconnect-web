import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    IconButton,
    Text,
    Link,
} from "@chakra-ui/react"
import React from 'react';
import { AddIcon, InfoOutlineIcon } from '@chakra-ui/icons'
import { Position } from '../interfaces'

function ListingTable(props) {
    return (
        <div>
            <Text fontSize="2xl">{props.title}</Text>
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
                    {props.positions.map((position: Position) => (
                        <Tr>
                            <Td><Link href="/position_description">{position.department}</Link></Td>
                            <Td><Link>{position.professor}</Link></Td>
                            <Td><Link>{position.title}</Link></Td>
                            <Td><IconButton aria-label="Search database" icon={<AddIcon/>} colorScheme="pink"/></Td>
                            <Td><Link href="/position_description"><IconButton aria-label="Search database" icon={<InfoOutlineIcon/>}  colorScheme="blue"/></Link></Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </div>
    );
}

export default ListingTable;
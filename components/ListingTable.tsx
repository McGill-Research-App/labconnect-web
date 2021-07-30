import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Text,
} from "@chakra-ui/react"
import React from 'react';
import { Position } from '../interfaces'
import ListingRow from "./ListingRow";


function ListingTable(props) {
    return (
        <>
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
                    {props.positions.map((position: Position, index: number) => ( 
                        <ListingRow key={index} position={position}/>
                    ))}
                </Tbody>
            </Table>
        </>
    );
}

export default ListingTable;
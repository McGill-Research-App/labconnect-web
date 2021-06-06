import {
  useColorModeValue,
  Box,
  Badge,
  Flex,
  HStack,
  Image,
} from "@chakra-ui/react"
import { StarIcon } from "@chakra-ui/icons"
import { Professor, Property } from "../interfaces"

export const ProfessorSummary = ({ prof }: { prof: Professor }) => {
  const textColor = useColorModeValue("gray.600", "gray.400")
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Box
            color={textColor}
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
          >
            {prof.title}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {prof.name}
        </Box>
        
      </Box>
    </Box>
  )
}

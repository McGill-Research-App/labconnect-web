import { Box, Code, Text, Link, VStack, Grid } from "@chakra-ui/react"
import { Chakra } from "../Chakra"
import { Layout } from "../components/Layout"
import { Logo } from "../components/Logo"
import { NextChakraLink } from "../components/NextChakraLink"

interface IndexProps {
  cookies?: string
}

const IndexPage = ({ cookies }: IndexProps) => (
  <Chakra cookies={cookies}>
    <Layout title="Home | LabConnect">
    </Layout>
  </Chakra>
)

export default IndexPage
export { getServerSideProps } from "../Chakra"

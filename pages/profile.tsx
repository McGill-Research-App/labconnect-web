import { Box, Code, Text, Link, VStack, Grid } from "@chakra-ui/react"
import { Chakra } from "../Chakra"
import { Layout } from "../components/Layout"
import { Logo } from "../components/Logo"
import { NextChakraLink } from "../components/NextChakraLink"

interface ProfileProps {
  cookies?: string
}

const ProfilePage = ({ cookies }: ProfileProps) => (
  <Chakra cookies={cookies}>
    <Layout title="My Profile | LabConnect">
    </Layout>
  </Chakra>
)

export default ProfilePage
export { getServerSideProps } from "../Chakra"

import { Heading, Wrap, WrapItem } from "@chakra-ui/react"
import { Layout } from "../../components/Layout"
import { ProfessorSummary } from "../../components/ProfessorSummary"
import { NextChakraLink } from "../../components/NextChakraLink"
import { Chakra } from "../../Chakra"
import data from "../../utils/prof-data.json"

interface ProfessorProps {
  cookies?: string
}

const ProfessorsPage = ({ cookies }: ProfessorProps) => (
  <Chakra cookies={cookies}>
    <Layout title="Professors - LabConnect">
      <Heading mb={4}>Pharmacology & Therapeutics</Heading>
      <Wrap>
        {data.map((professor) => (
          <WrapItem key={professor.name}>
            <NextChakraLink
              href="/professors/[id]"
              as={`/professors/${professor.name.replace(/\s+/g, '-').toLowerCase()}`}
            >
              <ProfessorSummary prof={professor} />
            </NextChakraLink>
          </WrapItem>
        ))}
      </Wrap>
    </Layout>
  </Chakra>
)

export default ProfessorsPage
export { getServerSideProps } from "../../Chakra"

import { QuestionIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  FormLabel,
  GridItem,
  Heading,
  HStack,
  Input,
  Select,
  SimpleGrid,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Chakra } from "../../Chakra";
import { Layout } from "../../components/Layout";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  employer: Yup.string().required("Required"),
  location: Yup.string().required("Required"),
  department: Yup.string().required("Required"),
  requirements: Yup.string().required("Required"),
  inputTags: Yup.string().required("Required"),
});

const initialValues = {
  title: "",
  description: "",
  employer: "",
  location: "",
  department: "",
  requirements: "",
  inputTags: "",
  tags: [""],
};

const CreatePostingPage = () => (
  <Chakra>
    <Layout title="Create Posting - LabConnect">
      <Flex h="100vh">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            values = {
              ...values,
              tags: values.inputTags.split(",").map((tag) => tag.trim()),
            };
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <>
                <VStack w="full" p={8} spacing={8} alignItems="flex-start">
                  <Heading size="2xl">Create Posting</Heading>
                  <Form onSubmit={handleSubmit}>
                    <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
                      <GridItem colSpan={2}>
                        <FormLabel htmlFor="title">Title</FormLabel>
                        <Input
                          id="title"
                          name="title"
                          placeholder="PhD Student"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.title}
                        />
                        {errors.title && touched.title && (
                          <Text color="red.500" fontSize="xs">
                            {errors.title}
                          </Text>
                        )}
                      </GridItem>
                      <GridItem colSpan={2}>
                        <FormLabel htmlFor="description">Description</FormLabel>
                        <Input
                          id="description"
                          name="description"
                          placeholder="PhD candidate for a collaborative project"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.description}
                        />
                        {errors.description && touched.description && (
                          <Text color="red.500" fontSize="xs">
                            {errors.description}
                          </Text>
                        )}
                      </GridItem>
                      <GridItem colSpan={2}>
                        <FormLabel htmlFor="requirements">
                          Requirements
                        </FormLabel>
                        <Input
                          id="requirements"
                          name="requirements"
                          placeholder="MSc in CS, 3 years of experience"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.requirements}
                        />
                        {errors.requirements && touched.requirements && (
                          <Text color="red.500" fontSize="xs">
                            {errors.requirements}
                          </Text>
                        )}
                      </GridItem>
                      <GridItem colSpan={1}>
                        <FormLabel htmlFor="employer">Employer</FormLabel>
                        <Input
                          id="employer"
                          name="employer"
                          placeholder="McGill University"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.employer}
                        />
                        {errors.employer && touched.employer && (
                          <Text color="red.500" fontSize="xs">
                            {errors.employer}
                          </Text>
                        )}
                      </GridItem>
                      <GridItem colSpan={1}>
                        <FormLabel htmlFor="department">Department</FormLabel>
                        <Input
                          id="department"
                          name="department"
                          placeholder="Computer Science"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.department}
                        />
                        {errors.department && touched.department && (
                          <Text color="red.500" fontSize="xs">
                            {errors.department}
                          </Text>
                        )}
                      </GridItem>
                      <GridItem colSpan={1}>
                        <FormLabel htmlFor="location">Location</FormLabel>
                        <Select
                          id="location"
                          name="location"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.location}
                        >
                          <option value="">Select a location</option>
                          <option value="AB">Alberta</option>
                          <option value="BC">British Columbia</option>
                          <option value="MB">Manitoba</option>
                          <option value="NB">New Brunswick</option>
                          <option value="NL">Newfoundland and Labrador</option>
                          <option value="NS">Nova Scotia</option>
                          <option value="ON">Ontario</option>
                          <option value="PE">Prince Edward Island</option>
                          <option value="QC">Quebec</option>
                          <option value="SK">Saskatchewan</option>
                          <option value="NT">Northwest Territories</option>
                          <option value="NU">Nunavut</option>
                          <option value="YT">Yukon</option>
                        </Select>
                        {errors.location && touched.location && (
                          <Text color="red.500" fontSize="xs">
                            {errors.location}
                          </Text>
                        )}
                      </GridItem>
                      <GridItem colSpan={1}>
                        <HStack>
                          <FormLabel htmlFor="inputTags">
                            Tags
                            <Tooltip
                              label="Separate tags with commas"
                              placement="right"
                            >
                              <QuestionIcon ml={2} />
                            </Tooltip>
                          </FormLabel>
                        </HStack>
                        <Input
                          id="inputTags"
                          name="inputTags"
                          placeholder="AI, ML, Data Science"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.inputTags}
                        />
                        {errors.inputTags && touched.inputTags && (
                          <Text color="red.500" fontSize="xs">
                            {errors.inputTags}
                          </Text>
                        )}
                      </GridItem>
                      <GridItem colSpan={2}>
                        <Button
                          w="full"
                          type="submit"
                          size="lg"
                          colorScheme="teal"
                          mt={4}
                          isLoading={isSubmitting}
                          loadingText="Creating Posting..."
                        >
                          Create Posting
                        </Button>
                      </GridItem>
                    </SimpleGrid>
                  </Form>
                </VStack>
                <VStack
                  w="full"
                  spacing={10}
                  alignItems="flex-start"
                  bg="gray.50"
                >
                  <DisplayFormikState {...props} />
                </VStack>
              </>
            );
          }}
        </Formik>
      </Flex>
    </Layout>
  </Chakra>
);

// https://codesandbox.io/s/zKrK5YLDZ
const DisplayFormikState = (props: any) => (
  <div style={{ margin: "1rem 0" }}>
    <h3 style={{ fontFamily: "monospace" }} />
    <pre
      style={{
        background: "#f6f8fa",
        fontSize: ".65rem",
        padding: ".5rem",
      }}
    >
      <strong>props</strong> = {JSON.stringify(props, null, 2)}
    </pre>
  </div>
);

export default CreatePostingPage;
export { getServerSideProps } from "../../Chakra";

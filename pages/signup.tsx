import {
  Box,
  Button,
  Flex,
  FormLabel,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Chakra } from "../Chakra";
import { Layout } from "../components/Layout";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  born: "",
  password: "",
  confirmPassword: "",
  phone: "",
  address: "",
  city: "",
  province: "",
  postalCode: "",
  country: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  born: Yup.string().required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  phone: Yup.string()
    .matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
    .required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  province: Yup.string().required("Required"),
  postalCode: Yup.string().max(6).required("Required"),
  country: Yup.string().required("Required"),
  // TODO: signup needs to account for students outside of Canada
  // i.e. postal code should be optional
});

const SignupPage = () => (
  <Chakra>
    <Layout title="Sign Up - LabConnect">
      <Flex w="full" align="center" justifyContent="center">
        <Box w="container.lg" bg="gray.50">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
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
                  <VStack w="full" p={8} spacing={6} alignItems="flex-start">
                    <VStack spacing={3} alignItems="flex-start">
                      <Heading size="2xl">Sign Up</Heading>
                      <Text>Create a new account for LabConnect.</Text>
                    </VStack>
                    <Form onSubmit={handleSubmit}>
                      <SimpleGrid columns={4} columnGap={3} rowGap={6} w="full">
                        <GridItem colSpan={1}>
                          <FormLabel htmlFor="firstName">First name</FormLabel>
                          <Input
                            id="firstName"
                            name="firstName"
                            placeholder="John"
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.firstName && touched.firstName && (
                            <Text color="red.500" fontSize="xs">
                              {errors.firstName}
                            </Text>
                          )}
                        </GridItem>
                        <GridItem colSpan={1}>
                          <FormLabel htmlFor="lastName">Last name</FormLabel>
                          <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Doe"
                            value={values.lastName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.lastName && touched.lastName && (
                            <Text color="red.500" fontSize="xs">
                              {errors.lastName}
                            </Text>
                          )}
                        </GridItem>
                        <GridItem colSpan={1}>
                          <FormLabel htmlFor="email">Email</FormLabel>
                          <Input
                            id="email"
                            name="email"
                            placeholder="john.doe@gmail.com"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.email && touched.email && (
                            <Text color="red.500" fontSize="xs">
                              {errors.email}
                            </Text>
                          )}
                        </GridItem>
                        <GridItem colSpan={1}>
                          <FormLabel htmlFor="born">Date of birth</FormLabel>
                          <Input
                            id="born"
                            name="born"
                            type="date"
                            placeholder="Date"
                            value={values.born}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.born && touched.born && (
                            <Text color="red.500" fontSize="xs">
                              {errors.born}
                            </Text>
                          )}
                        </GridItem>
                        <GridItem colSpan={1}>
                          <FormLabel htmlFor="password">Password</FormLabel>
                          <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.password && touched.password && (
                            <Text color="red.500" fontSize="xs">
                              {errors.password}
                            </Text>
                          )}
                        </GridItem>
                        <GridItem colSpan={1}>
                          <FormLabel htmlFor="confirmPassword">
                            Confirm Password
                          </FormLabel>
                          <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="••••••••"
                            value={values.confirmPassword}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.confirmPassword && touched.confirmPassword && (
                            <Text color="red.500" fontSize="xs">
                              {errors.confirmPassword}
                            </Text>
                          )}
                        </GridItem>
                        <GridItem colSpan={1}>
                          <FormLabel htmlFor="phone">Phone number</FormLabel>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="123-456-7890"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.phone && touched.phone && (
                            <Text color="red.500" fontSize="xs">
                              {errors.phone}
                            </Text>
                          )}
                        </GridItem>
                        <GridItem colSpan={1}>
                          <FormLabel htmlFor="address">Address</FormLabel>
                          <Input
                            id="address"
                            name="address"
                            placeholder="123 Main St"
                            value={values.address}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.address && touched.address && (
                            <Text color="red.500" fontSize="xs">
                              {errors.address}
                            </Text>
                          )}
                        </GridItem>
                        <GridItem colSpan={1}>
                          <FormLabel htmlFor="city">City</FormLabel>
                          <Input
                            id="city"
                            name="city"
                            placeholder="Montreal"
                            value={values.city}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.city && touched.city && (
                            <Text color="red.500" fontSize="xs">
                              {errors.city}
                            </Text>
                          )}
                        </GridItem>
                        <GridItem colSpan={1}>
                          <FormLabel htmlFor="province">Province</FormLabel>
                          <Input
                            id="province"
                            name="province"
                            placeholder="Quebec"
                            value={values.province}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.province && touched.province && (
                            <Text color="red.500" fontSize="xs">
                              {errors.province}
                            </Text>
                          )}
                        </GridItem>
                        <GridItem colSpan={1}>
                          <FormLabel htmlFor="postalCode">
                            Postal Code
                          </FormLabel>
                          <Input
                            id="postalCode"
                            name="postalCode"
                            placeholder="H0H 0H0"
                            value={values.postalCode}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.postalCode && touched.postalCode && (
                            <Text color="red.500" fontSize="xs">
                              {errors.postalCode}
                            </Text>
                          )}
                        </GridItem>
                        <GridItem colSpan={1}>
                          <FormLabel htmlFor="country">Country</FormLabel>
                          <Input
                            id="country"
                            name="country"
                            placeholder="Canada"
                            value={values.country}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {errors.country && touched.country && (
                            <Text color="red.500" fontSize="xs">
                              {errors.country}
                            </Text>
                          )}
                        </GridItem>
                        <GridItem colSpan={4}>
                          <Button
                            w="full"
                            type="submit"
                            size="lg"
                            colorScheme={"teal"}
                            mt={4}
                            isLoading={isSubmitting}
                            loadingText="Creating account..."
                          >
                            Create account
                          </Button>
                        </GridItem>
                      </SimpleGrid>
                    </Form>
                  </VStack>
                  {/* <DisplayFormikState {...props} /> */}
                </>
              );
            }}
          </Formik>
        </Box>
      </Flex>
    </Layout>
  </Chakra>
);

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

export default SignupPage;
export { getServerSideProps } from "../Chakra";

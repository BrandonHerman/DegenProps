import { SimpleGrid, Center, Image, Text, Input, Button } from "@chakra-ui/react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { Formik } from "formik"
import { useRouter } from "next/router";

const Index = () => {

    const router = useRouter();

    const onLogin= async (values) => {
        const response = await fetch("/api/account", {
            method: "GET",
            headers: {
              "content-Type": "application/json",
            },
          });
        console.log(response);
    }

    return (
        <SimpleGrid column={1} spacing="10px" justifyContent='center' width="100%" pt="25vh">
            <Center>
                <Text>
                    DegenProps baby
                </Text>
            </Center>
            <Center>
                <Image width="25%" src='https://i.imgur.com/BDM5RGu.jpg' />
            </Center>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    onLogin(values)
                    setTimeout(() => {
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Center>
                            <Input
                                m="10px"
                                width="50%"
                                placeholder="Username"
                                type="username"
                                name="username"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.username}
                            />
                        </Center>
                        {errors.username && touched.username && errors.username}
                        <Center>
                            <Input
                                m="10pxm"
                                width="50%"
                                placeholder="Password"
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                        </Center>
                        {errors.password && touched.password && errors.password}
                        <Center>
                            <Button m="10px" type="submit" disabled={isSubmitting}>
                                Submit
                            </Button>
                        </Center>
                    </form>
                )}
            </Formik>
    );
        </SimpleGrid >
    )
}


export default Index;
import { SimpleGrid, Center, Input,  Box, Image, Text, Button } from "@chakra-ui/react"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import Parse from 'parse';
import {useState} from 'react';
import { Formik, Field, Form } from 'formik';
import { useRouter } from "next/router";

export const Index = () => {
  const router = useRouter();
  const user = new Parse.User();
  const [submitting, setSubmitting] = useState(false);

  const onLogin = async(values) => {
    Parse.User.logIn(values.username, values.password)
      .then((user: Parse.User) => {
        console.log('successfully logged ${user.get("username")}')
        router.push('/home');
      return true;
      })
      .catch((error: object) => {
        console.log(user);
        console.log({error});
      return false;
  });
  };

  function validateUser(value){
    let error;
    if (!value) {
      error = 'Username required';
    }
    return error;
  }

  return (
    <Box background="#212121" width='100%' height='100vh'>
    <SimpleGrid column={1} spacing="10px" justifyContent='center' width="100%" pt="25vh">
      <Center>
        <Text textColor='primaryWhite'>
          DegenProps baby
        </Text>
      </Center>
      <Center>
        <Image width="25%" border="1px solid" borderColor='primaryWhite' src='https://i.imgur.com/RjxRYti.jpg' />
      </Center>
      <Formik
        initialValues={{
            username: '',
            password: '',
          }}
        onSubmit={async (values, setSubmitting ) => {
          console.log(values);
          onLogin(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
              <Center>
              <Field name='username' validate={validateUser}>
                {({field, form }) => (
                  <FormControl isInvalid={form.errors.name && form.touched.name} isRequired>
                      <Center>
                        <Input m='10px' {...field} textColor='primaryWhite' width='30%' id='username' placeholder='username' />
                      </Center>
                  </FormControl>
                )}
              </Field>
              </Center>
              <Field name='password' validate={validateUser}>
                {({field, form }) => (
                  <FormControl isInvalid={form.errors.name && form.touched.name} isRequired>
                      <Center>
                        <Input {...field} m='10px' textColor='primaryWhite' width='30%' id='password' placeholder='password' type='password' />
                      </Center>
                  </FormControl>
                )}
              </Field>
            <Center>
                  <Button
                    variant="outline"
                    border='1px solid'
                    borderColor='primaryOrange'
                    textColor='primaryWhite'
                    type='submit'
                    isLoading={isSubmitting}
                    _hover={{bg:'#FFFFFF00'}}
                    _active={{
                      bg:'#FFFFFF00',
                      borderImage: 'linear-gradient(to bottom, #D94389, #a858f5) 1',
                      outline: 'none'}}
                    mt='10px'>
                    Submit
                  </Button>
            </Center>
          </Form>
        )}
      </Formik>
      );
    </SimpleGrid >
      </Box>
  )
}


export default Index;

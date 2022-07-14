import { Center, Flex, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Select, SimpleGrid, UnorderedList, FormControl, Button, Text, Box, Input, ListItem } from '@chakra-ui/react';
import FormInput from '../components/FormInput.tsx';
import Layout from '../components/Layout.tsx';
import {createProp, readProps} from '../services/createProp.tsx';
import Parse from 'parse';
import {Formik, Form, Field, FieldArray, ErrorMessage} from 'formik';
import {useState, useEffect} from 'react';
import * as Yup from 'yup';
import Options from '../components/Options.tsx';

const Home = () => {
  const initial: Parse.Object[] = [];
  const format = (value) => (value>=0) ? `+`+value : value;
  const [odds, setOdds] = useState('0');
  const [readResults, setReadResults] = useState(initial);
  const formSchema = Yup.object().shape({
    title: Yup.string(). required('Title required'),
    description: Yup.string(). required('Description required'),
    numberOfOptions: Yup.string().required('Number of options required'),
    options: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required('Required'),
        odds: Yup.number().required('Required')
      })
    )
  })

  const initialValues = {
    title: '',
    description: '',
    numberOfOptions: '',
    options: [],
  }
  function onAdd(e, field, values, setValues) {
    const options = [...values.options];
    const numberOfOptions = e.target.value || 0;
    const previousNumber = parseInt(field.value || '0');
    if (previousNumber < numberOfOptions) {
      for ( let i = previousNumber; i < numberOfOptions; i++) {
        options.push({name: '', value:null});
        }
    } else {
      for (let i = previousNumber; i>=numberOfOptions; i++) {
        options.splice(i,1);
      }
    }
  setValues({...values, options});

    field.onChange(e);

  }

  function onSubmit(fields) {
    alert('success!!\n\n' + JSON.stringify(fields,null,4));
  }

  useEffect(() => {
    setReadResults(readProps());
  }, []);

  return (
  <Layout>
      <Center>
      <Text color="primaryGreen">
        New Prop
      </Text>
      </Center>
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={onSubmit}
        >
        {({ errors, values, touched, setValues }) => (
        <Form>
          <SimpleGrid columns={1} spacing={10}>
              <FormInput
               label='Title'
               type='input'
               name='title'
                placeholder='Will Cole drink his own piss?'
               />
                <ErrorMessage name="title" render={msg =>
                    <Text mt='-30px' color='red'>
                    {msg}
                    </Text>
              } />
              <FormInput
               label='Description'
               type='input'
               name='description'
               placeholder='Will the legend repeat itself? Who knows?'
               />
                <ErrorMessage name="description" render={msg =>
                    <Text mt='-30px' color='red'>
                    {msg}
                    </Text>
              }/>

                <Text mb='-25px' color="primaryGreen">
                  Number of options
                </Text>
                <Field name ="numberOfOptions">
                {({ field  }) =>
                  <Select
                    placeholder='Select number of options'
                    {...field}
                    textColor='#718096'
                    onChange = {e => onAdd(e, field, values, setValues)}
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(i=>
                      <option key={i} value={i}>{i}</option>
                    )}
                  </Select>
                }
                </Field>
                <ErrorMessage name="numberOfOptions" render={msg =>
                    <Text mt='-30px' color='red'>
                    {msg}
                    </Text>
              } />


              <FieldArray name='options' mt='-30px'>
              {() => (values.options.map((option, i)=>
                (
                    <>
                  <Text mb='-95px' color="primaryGreen">Option {i+1}</Text>
                  <Center>
                  <Flex gap='5' mt='-50px' mb='-50px'>
                  <FormInput
                   type='input'
                   name='label'
                   placeholder='Title'
                   />
                  <NumberInput
                        defaultValue={0}
                        value={format(odds)}
                        onChange= { (valueString) => setOdds(valueString) }
                        step={10}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  </Flex>
                  </Center>
                   </>
                  )))}
              </FieldArray>
              <Button type='submit'> Submit </Button>
          </SimpleGrid>
        </Form>
      )}
      </Formik>
  </Layout>
  );

};

export default Home;

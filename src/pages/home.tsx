import {InputGroup, IconButton, InputLeftElement, Center, Flex, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Select, SimpleGrid, UnorderedList, FormControl, Button, Text, Box, Input, ListItem } from '@chakra-ui/react';
import {CloseIcon} from '@chakra-ui/icons';
import FormInput from '../components/FormInput.tsx';
import Layout from '../components/Layout.tsx';
import {createProp, readProps} from '../services/createProp.tsx';
import Parse from 'parse';
import {Formik, Form, Field, FieldArray, ErrorMessage} from 'formik';
import {useState, useEffect} from 'react';
import * as Yup from 'yup';
import Options from '../components/Options.tsx';

function Home() {
    const [titleValues, setTitleValues] = useState({ val: ['', '']});
    const [oddValues, setOddValues] = useState({val: ['110', '-110']});
    const [value, setValue] = useState('');
    const format = (value) => `+` + value;
      function createInputs() {
        return titleValues.val.map((titleValue, i) =>
          <Flex m='30px' key={i} gap={5}>
            <Input value={titleValue ||''} borderColor='primaryGreen' placeholder='Insert Option' onChange={handleTitleChange.bind(i)} />
            <NumberInput
              onChange={handleOddChange.bind(i)}
              borderColor='primaryGreen'
              value={(oddValues.val[i]>0) ? format(oddValues.val[i]) : oddValues.val[i]}
              step={10}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>

          <IconButton aria-label='Remove Option'
          textColor='red'
          bgColor='#FFFFFF00'
          icon={<CloseIcon/>}
          name={i} onClick={removeClick.bind(i)}></IconButton>
          </Flex>
        );
      }

    function handleTitleChange(event) {
      let vals = [...titleValues.val];
      vals[this] = event.target.value;
      setTitleValues({ val: vals });
    }

    function handleOddChange(value) {
      let vals = [...oddValues.val];
      vals[this] = value;
      setOddValues({ val: vals });
    }

    const addClick = () => {
      setTitleValues({ val: [...titleValues.val, '']})
      setOddValues({val: [...oddValues.val, '']})
    }

    const removeClick = (event) => {
      let titleVals = [...titleValues.val];
      let oddVals = [...oddValues.val];
      let index = Number(event.target.name);
      titleVals.splice(index, 1);
      oddVals.splice(index, 1);
      setTitleValues({ val: titleVals });
      setOddValues({ val: oddVals });
    }

    const mergeArrays = (titles, odds) => {
      let options = [];
      for (let i = 0; i<titles.length; i++) {
       let temp = {title: titles[i], odds: odds[i]};
       options.push(temp);
      }
      return options;

    }
    const handleSubmit = event => {
      let options = mergeArrays(titleValues.val, oddValues.val);
      console.log(options);
      event.preventDefault();
    }

  return (
  <Layout>
      <Center>
      <Text mb='30px' fontSize='2xl' color="primaryGreen">
        New Prop
      </Text>
      </Center>
       <form onSubmit={handleSubmit}>

      <SimpleGrid columns={2} spacing={10}>
      <Box>
      <Text color="primaryGreen">
        Title
      </Text>
          <Input borderColor='primaryGreen' isRequired m='10px' name='title' placeholder='Prop Title'/>
      </Box>
      <Box>
      <Text color="primaryGreen">
       Description
      </Text>
          <Input borderColor='primaryGreen' m='10px' name='description' placeholder='Prop Description'/>
      </Box>
      <Box>
            <Center>
          <Button
            _hover = {{
              bgColor: '#FFFFFF40'
            }}
            _active = {{
              bgColor: '#FFFFFF80'
                }}
                mt='30px' variant='outline' borderColor='primaryGreen' textColor='primaryGreen' onClick={addClick}>Add Option</Button>
            </Center>
      </Box>
      <Box>
          {createInputs()}
      </Box>
      </SimpleGrid>
          <Center>
          <Button
            _hover = {{
              bgColor: '#FFFFFF40'
            }}
            _active = {{
              bgColor: '#FFFFFF80'
            }}
            mt='30px' variant='outline' borderColor='primaryGreen' width='70%' textColor='primaryGreen' type='submit'>Submit</Button>
          </Center>
      </form>
  </Layout>
  );

};

export default Home;

import { Center, Flex, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Select, SimpleGrid, UnorderedList, FormControl, Button, Text, Box, Input, ListItem } from '@chakra-ui/react';
import FormInput from '../components/FormInput.tsx';
import Layout from '../components/Layout.tsx';
import {createProp, readProps} from '../services/createProp.tsx';
import Parse from 'parse';
import {Formik, Form, Field, FieldArray, ErrorMessage} from 'formik';
import {useState, useEffect} from 'react';
import * as Yup from 'yup';
import Options from '../components/Options.tsx';

function Home() {
    const [titleValues, setTitleValues] = useState({ val: []});
    const [oddValues, setOddValues] = useState({val: []});

      function createInputs() {
        return titleValues.val.map((titleValue, i) =>
          <Flex m='30px' key={i} gap={5}>
            <Input value={titleValue ||''} onChange={handleTitleChange.bind(i)} />
            <Input value={oddValues.val[i]||''} onChange={handleOddChange.bind(i)} />
            <Button textColor='primaryGreen' name={i} onClick={removeClick.bind(i)}>Remove</Button>
          </Flex>
        );
      }

    function handleTitleChange(event) {
      let vals = [...titleValues.val];
      vals[this] = event.target.value;
      setTitleValues({ val: vals });
    }

    function handleOddChange(event) {
      let vals = [...oddValues.val];
      vals[this] = event.target.value;
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
      <Text color="primaryGreen">
        New Prop
      </Text>
      </Center>
      <Center>
       <form onSubmit={handleSubmit}>
          <Center>
          <Button mt='30px' textColor='primaryGreen' onClick={addClick}>Add</Button>
          </Center>
          {createInputs()}
          <Center>
          <Button textColor='primaryGreen' type='submit'>Submit</Button>
          </Center>
      </form>
      </Center>
  </Layout>
  );

};

export default Home;

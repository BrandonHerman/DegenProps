import {Box, Input, InputGroup, Select, Textarea, Text, Flex } from '@chakra-ui/react';
import {useState} from 'react';
import {Field, ErrorMessage} from 'formik';

const FormInput = ({
  label,
  type,
  name,
  placeholder,
  width,
  children,
}: {
  label: string;
  type: string;
    width: string;
  name: string;
    placeholder?: string;
  children?: React.ReactChild[];
}) =>
{
  return (
   <Box>
    <Text
     as='label'
     textStyle='formLabel'
     margin='0'
     marginBottom = '9px'
     display='inline-block'
    >
    {label}
    </Text>
    <Field type={type} name={name}>
     {({field}) => {
        switch (type) {
        case 'input':
         return (
          <Input
           {...field}
           textColor='primaryGreen'
           placeholder={placeholder}
           type='type'
           />
         );
        }
      }
      }
    </Field>
  </Box>
  );
};

export default FormInput;


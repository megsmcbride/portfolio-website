import React, { useState } from 'react';
import { FormControl, FormLabel, Input, FormHelperText, FormErrorMessage} from '@chakra-ui/react';

function Contact() {
  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const isError = input === ''

  return (
<>
  <h1>Contact Me</h1>
  <div className="contact-form">
  <FormControl isInvalid={isError}>
      <FormLabel>Name</FormLabel>
      <Input
        type='email'
        value={input}
        onChange={handleInputChange}
      />
          <FormLabel>Email</FormLabel>
      <Input
        type='email'
        value={input}
        onChange={handleInputChange}
      />
          <FormLabel>Email</FormLabel>
      <Input
        type='email'
        value={input}
        onChange={handleInputChange}
      />
    </FormControl>

  </div>
</>
  )
};


export default Contact;

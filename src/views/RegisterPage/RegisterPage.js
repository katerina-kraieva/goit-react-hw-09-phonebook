import React, { useState } from 'react';
import { Button, Input, Box, FormLabel, Container } from '@material-ui/core';

// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

// const styles = {
//   form: {
//     width: 320,
//   },
//   label: {
//     display: 'flex',
//     flexDirection: 'column',
//     marginBottom: 15,
//   },
// };

export default function RegisterView() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

    return (
      <Container maxWidth="lg">
        <h1>Registration</h1>

        <form
          onSubmit={handleSubmit}
          // style={styles.form}
          autoComplete="off"
        >
          <FormLabel display="inline-block">
            Name
            <Input 
              color="secondary"
              type="name"
              name="name"
              value={name}
              onChange={handleChange}
            />
           </FormLabel>
          
          
            <FormLabel  display="inline-block">
            Email
            <Input
              color="secondary"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            </FormLabel>
          
            <FormLabel display="inline-block">
            Password
            <Input 
              color="secondary"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </FormLabel>
          

          <Box m={5}>
            <Button type="submit" variant="outlined" color="secondary">
              Sign Up
            </Button>
          </Box>
            
        </form>
      </Container>
    );
  }



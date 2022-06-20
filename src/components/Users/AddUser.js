import React, { useState } from 'react';
import classes from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Wrapper from '../Helpers/Wrapper';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const formSubmitHandler = event => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'invalid input',
        message: 'Please enter a valid name and age(non-empty values).'
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: 'invalid input',
        message: 'Please enter a valid age(>0).'
      });
      return;
    }

    props.addUser(enteredUsername, enteredAge);

    setEnteredUsername('');
    setEnteredAge('');

  }

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return(
    <Wrapper>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
    <Card className={classes.input}>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' value={enteredUsername} onChange={usernameChangeHandler} />
        <label htmlFor='age'>Age (Years)</label>
        <input type='number' id='age' value={enteredAge} onChange={ageChangeHandler} />
        <Button type='submit'>Add User</Button>
    </form>
    </Card>
    
    </Wrapper>
  );
};

export default AddUser;
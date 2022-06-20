import React, { useState, Fragment } from 'react';
import UsersList from './components/UI/UsersList';
import AddUser from './components/Users/AddUser';


function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList)=> {
      return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()} ]
    })
  };

  return (
    <Fragment>
      <AddUser addUser={addUserHandler} />
      <UsersList users={userList} />
    </Fragment>
  );
}

export default App;

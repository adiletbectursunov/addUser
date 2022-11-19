import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';


function App() {

  const [users, setUsers] = useState([])

  const addUserHandler = (name, age) => {
   setUsers([...users,{name, age, id: Math.random().toString()} ])
  }
  


  return (
    <div>
         <AddUser onAddUsers={addUserHandler}/>
         <UserList users={users}/>
    </div>
  );
}

export default App;

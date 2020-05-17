import React, {useState} from 'react';
import Form from "./Form";
import Users from "./Users";


function App() {
  const [users, setUser] = useState([{
    name: "",
    email: "",
    password: "",
    terms: false
  }]);

  const addUser = person => {
    const newUser = {
      name: person.name,
      email: person.email,
      password: person.password,
      terms: false
    }
    setUser([...users, newUser]);
  };

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Form addUser = {addUser} />
      <Users users={users} />
    </div>
  );
}

export default App;

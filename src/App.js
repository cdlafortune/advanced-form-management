import React, {useState} from 'react';
import Form from "./Form";


function App() {
  const [user, setUser] = useState([{
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
    setUser([...user, newUser]);
  };

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <Form addUser = {addUser} />
    </div>
  );
}

export default App;

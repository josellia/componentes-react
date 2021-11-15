import React, {useEffect, useState} from 'react';
import axios from 'axios';


import './App.css';
import Table from './components/Table/Table';
const URL = "https://reqres.in/api/users/";

function App() {
  const [users, setUsers] = useState([]);

  const listUsers = async() => {
   await axios.get(URL).then((resp) => {
     setUsers(resp.data.data);
   }).catch((error) => console.log(error))
  }

  useEffect(() => {
     listUsers();
  }, []);

  const columns = {
    first_name: "",
    last_name: "",
    email: "",
  }
  return (
    <div className="App">
      <Table rows={users} headers={Object.keys(columns)}/>
    </div>
  );
}

export default App;

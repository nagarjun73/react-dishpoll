import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useState } from 'react';

import Login from "./components/login/LoginContainer";
import MainAppContainer from './components/MainApp/MainAppContainer';

const App = (props) => {
  const [data, setData] = useState({
    users: [
      {
        "id": 1,
        "username": "amar",
        "password": "amar123"
      },
      {
        "id": 2,
        "username": "akbar",
        "password": "akbar123"
      },
      {
        "id": 3,
        "username": "antony",
        "password": "antony123"
      },
      {
        "id": 4,
        "username": "john",
        "password": "john123"
      },
      {
        "id": 5,
        "username": "paul",
        "password": "paul123"
      }
    ],
    dishes: []
  })

  console.log(data);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login data={data} />} />
        <Route path='/main' element={<MainAppContainer data={data} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

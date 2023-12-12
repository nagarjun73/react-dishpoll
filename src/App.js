import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useReducer, createContext, useEffect } from 'react';

import LoginContainer from './components/login/LoginContainer'
import MainAppContainer from './components/MainApp/MainAppContainer';

import axios from 'axios';

export const UserContext = createContext()

//reducer fuction
function userReducer(state, action) {
  switch (action.type) {
    case "LOG_IN": {
      return { ...state, loggedInUser: action.payload }
    }

    default: {
      return { ...state }
    }
  }
}


const App = (props) => {

  //initail state for reducer function
  const initialState = {
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
    loggedInUser: {},
    dishes: []
  }
  const [user, userDispatch] = useReducer(userReducer, initialState)

  // useEffect(() => {
  //   const dishes = 
  // })

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, userDispatch }} >
        <Routes>
          <Route path='/' element={<LoginContainer />} />
          <Route path='/main' element={<MainAppContainer />} />
        </Routes>
      </UserContext.Provider >
    </BrowserRouter>
  );
}

export default App;

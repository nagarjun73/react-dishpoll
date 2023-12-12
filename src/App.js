import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useReducer, createContext, useEffect } from 'react';

import LoginContainer from './components/login/LoginContainer'
import MainAppContainer from './components/MainApp/MainAppContainer';

import axios from 'axios';

export const UserContext = createContext()
export const DishesContext = createContext()

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

function dispatchReducer(state, action) {
  switch (action.type) {
    case "UPDATE_DISH": {
      return { ...state, dishesList: action.payload }
    }

    default: {
      return { ...state }
    }
  }
}


const App = (props) => {

  //initail state for reducer function
  const initialUserState = {
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
    loggedInUser: {}
  }

  const initialDishesState = {
    dishesList: [],
  }

  const [user, userDispatch] = useReducer(userReducer, initialUserState)
  const [dishes, disheDispatch] = useReducer(dispatchReducer, initialDishesState)

  console.log(user, dishes);

  useEffect(() => {
    ((async () => {
      const dishes = await axios.get('https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json')

      disheDispatch({ type: "UPDATE_DISH", payload: dishes.data });
    })())
  }, [])

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, userDispatch }} >
        <DishesContext.Provider value={{ dishes, disheDispatch }}>
          <Routes>
            <Route path='/' element={<LoginContainer />} />
            <Route path='/main' element={<MainAppContainer />} />
          </Routes>
        </DishesContext.Provider>
      </UserContext.Provider >
    </BrowserRouter>
  );
}

export default App;

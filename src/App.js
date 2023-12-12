import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useReducer, createContext, useEffect } from 'react';

import LoginContainer from './components/login/LoginContainer'
import MainAppContainer from './components/MainApp/MainAppContainer';
import Navbar from './components/Navbar.js'
import DisheRankingContainer from './components/MainApp/DisheRanking/DisheRankingContainer.js'

import axios from 'axios';

export const UserContext = createContext()
export const DishesContext = createContext()

//reducer fuction
function userReducer(state, action) {
  switch (action.type) {
    case "LOG_IN": {
      return { ...state, loggedInUser: action.payload }
    }

    case "UPDATE_VOTE": {

      const findIfRankFilled = state.myVotes.find((ele) => ele.rank === action.payload.rank)
      if (findIfRankFilled) {
        return {
          ...state, myVotes: [...state.myVotes.map((ele) => {
            if (ele.rank === action.payload.rank) {
              return action.payload
            } else {
              return ele
            }
          })]
        }
      } else {
        return { ...state, myVotes: [...state.myVotes, action.payload] }
      }

    }

    default: {
      return { ...state }
    }
  }
}

function dishesReducer(state, action) {
  switch (action.type) {
    case "UPDATE_DISH": {
      return { ...state, dishesList: action.payload }
    }

    case "UPDATE_ALL_VOTES": {
      //check if user votes available in all votes
      const findUserVote = state.allVotes.find((ele) => ele.userId == action.payload.userId)
      if (findUserVote) {
        return {
          ...state, allVotes: [...state.allVotes.map((ele) => {
            if (ele.userId == action.payload.userId) {
              return action.payload
            } else {
              return ele
            }
          })]
        }
      } else {
        return { ...state, allVotes: [...state.allVotes, action.payload] }
      }
    }

    case "GET_ALLVOTES": {
      return { ...state, allVotes: action.payload }
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
    loggedInUser: {},
    myVotes: []
  }

  const initialDishesState = {
    dishesList: [],
    allVotes: []
  }

  const [user, userDispatch] = useReducer(userReducer, initialUserState)
  const [dishes, disheDispatch] = useReducer(dishesReducer, initialDishesState)

  console.log(user, dishes);

  useEffect(() => {
    const user = localStorage.getItem('loggedUser')
    if (user) {
      userDispatch({ type: "LOG_IN", payload: JSON.parse(localStorage.getItem('loggedUser')) })
    }

    const allVotes = localStorage.getItem('allVotes')
    if (allVotes) {
      disheDispatch({ type: "GET_ALLVOTES", payload: JSON.parse(localStorage.getItem('allVotes')) });
    }

    ((async () => {
      const dishes = await axios.get('https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json')

      disheDispatch({ type: "UPDATE_DISH", payload: dishes.data });
    })())
  }, [])



  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, userDispatch }} >
        <DishesContext.Provider value={{ dishes, disheDispatch }}>
          <Navbar />
          <Routes>
            <Route path='/' element={<LoginContainer />} />
            <Route path='/main' element={<MainAppContainer />} />
            <Route path='/ranking' element={<DisheRankingContainer />} />
          </Routes>
        </DishesContext.Provider>
      </UserContext.Provider >
    </BrowserRouter>
  );
}

export default App;

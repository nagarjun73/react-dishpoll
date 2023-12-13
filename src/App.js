import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { useReducer, createContext, useEffect } from 'react';
import axios from 'axios';

//components
import LoginContainer from './components/login/LoginContainer'
import DishList from './components/MainApp/DishList/DishList.js';
import Navbar from './components/Navbar.js'
import DisheRankingContainer from './components/MainApp/DishRanking/DishRankingContainer.js'

//importing reducer fuction
import userReducer from './Reducers/userReducer.js'
import dishesReducer from './Reducers/dishesReducer.js'

//importing state
import initialUserState from './State/initialUserState.js'
import initialDishesState from './State/initialDishesState.js'

import getInitialData from './getInitialData.js'

//creating context
export const UserContext = createContext()
export const DishesContext = createContext()

const App = (props) => {
  //User Reducer
  const [user, userDispatch] = useReducer(userReducer, initialUserState)
  const [dishes, disheDispatch] = useReducer(dishesReducer, initialDishesState)

  useEffect(() => {
    getInitialData(userDispatch, disheDispatch)
  }, [])



  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, userDispatch }} >
        <DishesContext.Provider value={{ dishes, disheDispatch }}>
          <Navbar />
          <Routes>
            <Route path='/' element={<LoginContainer />} />
            <Route path='/main' element={<DishList />} />
            <Route path='/ranking' element={<DisheRankingContainer />} />
          </Routes>
        </DishesContext.Provider>
      </UserContext.Provider >
    </BrowserRouter>
  );
}

export default App;

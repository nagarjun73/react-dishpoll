import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Login from "./components/login/LoginContainer";
import MainAppContainer from './components/MainApp/MainAppContainer';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Login />} />
        <Route path='/main' element={<MainAppContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

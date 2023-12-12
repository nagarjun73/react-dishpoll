import { useContext } from 'react';
import { UserContext } from '../../App';

import DishList from "./DishList/DishList"

const MainAppContainer = (props) => {
  const { user } = useContext(UserContext)
  return (
    <div>
      {Object.keys(user.loggedInUser).length !== 0 && < DishList />}

    </div>
  )
}

export default MainAppContainer
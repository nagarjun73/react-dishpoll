import DishRankingList from "./DishRankingList"
import { Box, Typography } from "@mui/material"
import { UserContext } from '../../../App';
import { useContext } from "react"
import _ from 'lodash'

const DisheRankingContainer = (props) => {
  const { user } = useContext(UserContext)
  return (
    <Box marginTop="10vh">
      {_.isEmpty(user.loggedInUser)
        ?
        <Typography> Please Login</Typography>
        :
        < Box >
          <Typography variant="h3">Dish Ranking</Typography>
          <DishRankingList />
        </Box>}
    </Box >
  )
}

export default DisheRankingContainer
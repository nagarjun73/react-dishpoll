import { Box, Grid, Typography, Button } from "@mui/material"
import { DishesContext } from "../../../App"
import { useContext } from "react"
import DishListItem from "./DishListItem"
import { UserContext } from '../../../App';

const DishList = (props) => {
  const { dishes, disheDispatch } = useContext(DishesContext)
  const { user, userDispatch } = useContext(UserContext)
  console.log(dishes);

  const voteSubmitHandle = () => {
    disheDispatch({ type: "UPDATE_ALL_VOTES", payload: { userId: user.loggedInUser.id, votes: user.myVotes } })
    localStorage.setItem('dishes', JSON.stringify({ ...dishes, allVotes: [...dishes.allVotes, { userId: user.loggedInUser.id, votes: user.myVotes }] }))
  }

  return (
    <Box>
      <Typography variant="h2">Dish List </Typography>
      <Button variant="contained" onClick={voteSubmitHandle}>Submit</Button>
      <Grid container spacing={2}>
        {dishes.dishesList.map((ele) => {
          return <DishListItem key={ele.id} dish={ele} />
        })}
      </Grid>
    </Box>
  )
}

export default DishList
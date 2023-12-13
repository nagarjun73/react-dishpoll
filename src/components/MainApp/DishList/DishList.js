import { Box, Grid, Typography, Button, Stack } from "@mui/material"
import { DishesContext } from "../../../App"
import { useContext } from "react"
import DishListItem from "./DishListItem"
import { UserContext } from '../../../App';

import { useNavigate } from "react-router";

const DishList = (props) => {
  const { dishes, disheDispatch } = useContext(DishesContext)
  const { user, userDispatch } = useContext(UserContext)
  console.log(dishes);

  const navigate = useNavigate()

  const voteSubmitHandle = () => {
    disheDispatch({ type: "UPDATE_ALL_VOTES", payload: { userId: user.loggedInUser.id, votes: user.myVotes } })

    const allVotes = localStorage.getItem('allVotes')
    if (allVotes) {
      const parsedVotes = JSON.parse(localStorage.getItem('allVotes'))
      const findVotes = parsedVotes.find((ele) => ele.userId === user.loggedInUser.id)
      if (findVotes) {
        const modified = parsedVotes.map((ele) => {
          if (ele.userId === user.loggedInUser.id) {
            return { userId: user.loggedInUser.id, votes: user.myVotes }
          } else {
            return ele
          }
        })
        localStorage.setItem('allVotes', JSON.stringify(modified))
      } else {
        parsedVotes.push({ userId: user.loggedInUser.id, votes: user.myVotes })
        localStorage.setItem('allVotes', JSON.stringify(parsedVotes))
      }
    } else {
      localStorage.setItem('allVotes', JSON.stringify([{ userId: user.loggedInUser.id, votes: user.myVotes }]))
    }
    navigate('/ranking')
  }

  return (
    <Box paddingTop="10vh">
      <Stack direction="row" justifyContent="space-around" padding="20px">
        <Typography variant="h3">Dish List </Typography>
        <Button variant="contained" onClick={voteSubmitHandle}>Submit</Button>
      </Stack>
      <Grid container spacing={2} paddingX="20px">
        {dishes.dishesList.map((ele) => {
          return <DishListItem key={ele.id} dish={ele} />
        })}
      </Grid>
    </Box>
  )
}

export default DishList
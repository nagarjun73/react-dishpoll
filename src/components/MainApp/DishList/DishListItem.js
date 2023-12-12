import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { DishesContext } from '../../../App'

const DishListItem = (props) => {
  const { dish } = props
  const [rank, setRank] = useState('')
  const { dishes, disheDispatch } = useContext(DishesContext)
  const { user, userDispatch } = useContext(UserContext)

  useEffect(() => {
    if (rank) {
      userDispatch({ type: "UPDATE_VOTE", payload: { dishId: dish.id, rank: rank } })
    }
    if (dishes.length !== 0) {
      const findVote = dishes.allVotes.find((ele) => ele.userId == user.loggedInUser.id).votes
      const findRank = findVote.find((ele) => ele.dishId == dish.id)
      if (findRank) {
        setRank(findRank.rank)
      }
    }
  }, [rank])

  return (
    <Grid item xs={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={dish.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {dish.dishName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {dish.description}
          </Typography>
        </CardContent>
        <CardActions>
          <select value={rank} onChange={(e) => setRank(e.target.value)}>
            <option value={0}>Select Rank</option>
            <option value={30}>Rank 1</option>
            <option value={20}>Rank 2</option>
            <option value={10}>Rank 3</option>
          </select>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default DishListItem
import { Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import { useState } from 'react';

const DishListItem = (props) => {
  const { dish } = props
  const [rank, setRank] = useState('')
  console.log(rank);

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
          <select onChange={(e) => setRank(e.target.value)}>
            <option value={0}>Select Rank</option>
            <option value={30}>Rank 1</option>
            <option value={20}>Rank 2</option>
            <option value={10}>Rank 3</option>
          </select>
          <Button variant='contained' size="small">Vote</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default DishListItem
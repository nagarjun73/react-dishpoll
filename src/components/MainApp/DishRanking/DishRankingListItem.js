import ListItem from '@mui/material/ListItem';
import { Card, Box, Typography, Chip, Stack } from '@mui/material'
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const DishRankingItem = (props) => {
  const { dish } = props
  const [voted, setVoted] = useState('')
  const { user } = useContext(UserContext)

  useEffect(() => {
    if (user.myVotes.length !== 0) {
      const findVoted = user.myVotes.find((ele) => ele.dishId === dish.id)
      if (findVoted) {
        const ranks = {
          "30": "Rank 1",
          "20": "Rank 2",
          "10": "Rank 3"
        }
        setVoted(ranks[findVoted.rank])
      }
    }
  }, [user.myVotes])

  return (
    <Box width="80vw">
      <Card key={dish.id}>
        <ListItem  >
          <Stack direction="row">
            <Typography variant='h6' paddingX="20px">{dish.dishName}</Typography>
            <Chip label={dish.points} sx={{ paddingX: "15px", marginX: "20px" }} />
            <Box width="30vw">
              {voted && <Chip color="success" label={`Voted: ${voted}`} />}
            </Box>
          </Stack>
        </ListItem>
      </Card>
    </Box>
  )
}

export default DishRankingItem
import ListItem from '@mui/material/ListItem';
import { Card } from '@mui/material'


const DishRankingItem = (props) => {
  const { dish } = props

  return (
    <div>
      <Card key={dish.id}>
        <ListItem >{dish.dishName}  {dish.points}
        </ListItem>
      </Card>
    </div>
  )
}

export default DishRankingItem
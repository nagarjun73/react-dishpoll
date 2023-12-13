import List from '@mui/material/List';
import { useContext } from 'react';
import { DishesContext } from '../../../App';
import DishRankingItem from './DishRankingListItem'

const DishRankingList = (props) => {
  const { dishes, disheDispatch } = useContext(DishesContext)

  const helperDistr = (vote) => {
    const votes = vote.map((ele) => {
      return ele
    })
    return votes
  }

  //All votes return array of votes to remove userId
  const allVotes = dishes.allVotes.map((ele) => {
    return helperDistr(ele.votes)
  })


  //Helper function retuns points total
  const helperFunction = (vt) => {
    const final = allVotes.flat().reduce((ini, ele2) => {
      if (ele2.dishId == vt.id) {
        return ini + Number(ele2.rank)
      } else {
        return ini
      }
    }, 0)
    return { ...vt, points: final }
  }

  //Displaying all dishes with rakings
  const allDishes = dishes.dishesList.map((ele) => {
    return helperFunction(ele)
  })

  return (
    <List sx={{ width: '90vw', maxWidth: 360, bgcolor: 'background.paper' }}>
      {allDishes.sort((a, b) => b.points - a.points).map((ele) => {
        return <DishRankingItem key={ele.id} dish={ele} />
      })}
    </List>
  )
}

export default DishRankingList
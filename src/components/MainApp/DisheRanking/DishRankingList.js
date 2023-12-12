import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Card } from '@mui/material'
import { DishesContext } from '../../../App';
import { useContext } from 'react';

const DishRankingList = (props) => {
  const { dishes, disheDispatch } = useContext(DishesContext)

  const helperDistr = (vote) => {
    const votes = vote.map((ele) => {
      return ele
    })
    return votes
  }

  const allVotes = dishes.allVotes.map((ele) => {
    return helperDistr(ele.votes)
  })

  console.log(allVotes.flat());

  const helperFunction = (vt) => {
    const final = allVotes.flat().reduce((ini, ele2) => {
      if (ele2.dishId == vt.id) {
        console.log(ini, vt);
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

  console.log(allDishes);


  return (
    <List sx={{ width: '90vw', maxWidth: 360, bgcolor: 'background.paper' }}>
      {allDishes.sort((a, b) => b.points - a.points).map((ele) => {
        return <Card><ListItem >{ele.dishName}  {ele.points}</ListItem></Card>
      })}
      {/* <Card><ListItem >dish 1</ListItem></Card>
      <Card><ListItem >dish 1</ListItem></Card>
      <Card><ListItem >dish 1</ListItem></Card> */}
    </List>
  )
}

export default DishRankingList
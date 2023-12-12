import { Box, Grid, Typography } from "@mui/material"
import { DishesContext } from "../../../App"
import { useContext } from "react"
import DishListItem from "./DishListItem"

const DishList = (props) => {
  const { dishes, dishesDispatch } = useContext(DishesContext)
  console.log(dishes);
  return (
    <Box>
      <Typography variant="h2">Dish List </Typography>
      <Grid container spacing={2}>
        {dishes.dishesList.map((ele) => {
          return <DishListItem key={ele.id} dish={ele} />
        })}
      </Grid>
    </Box>
  )
}

export default DishList
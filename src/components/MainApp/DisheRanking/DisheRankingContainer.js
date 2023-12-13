import DishRankingList from "./DishRankingList"
import { Box, Typography } from "@mui/material"

const DisheRankingContainer = (props) => {
  return (
    <Box marginTop="10vh">
      <Typography variant="h3">Dish Ranking</Typography>
      <DishRankingList />
    </Box>
  )
}

export default DisheRankingContainer
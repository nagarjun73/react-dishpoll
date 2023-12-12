import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material"
import { Link } from 'react-router-dom'


const Navbar = (props) => {
  return (
    <div>
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            DISH APP
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: '#fff' }}>
              <Link style={{ textDecoration: "none", color: '#ffffff' }} to='/main'>Dish List</Link>
            </Button>
            <Button sx={{ color: '#fff' }}>
              <Link style={{ textDecoration: "none", color: '#ffffff' }} to='/ranking'>Dish Ranking</Link>
            </Button>
            <Button sx={{ color: '#fff' }}>
              <Link style={{ textDecoration: "none", color: '#ffffff' }} to='/'>Logout</Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
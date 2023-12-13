import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"

const Navbar = (props) => {
  const navigate = useNavigate()

  const logoutButtonHandle = () => {
    localStorage.removeItem('loggedUser')
    navigate('/')
  }

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
          {localStorage.getItem('loggedUser')
            ?
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button sx={{ color: '#fff' }}>
                <Link style={{ textDecoration: "none", color: '#ffffff' }} to='/main'>Dish List</Link>
              </Button>
              <Button sx={{ color: '#fff' }}>
                <Link style={{ textDecoration: "none", color: '#ffffff' }} to='/ranking'>Dish Ranking</Link>
              </Button>
              <Button onClick={logoutButtonHandle} sx={{ color: '#fff' }}>
                <Link style={{ textDecoration: "none", color: '#ffffff' }} to='/'>Logout</Link>
              </Button>
            </Box>
            :
            <Button sx={{ color: '#fff' }}>
              <Link style={{ textDecoration: "none", color: '#ffffff' }} to='/'>Login</Link>
            </Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
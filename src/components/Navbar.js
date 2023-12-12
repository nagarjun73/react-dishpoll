import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material"
import { Link } from 'react-router-dom'


const Navbar = (props) => {

  const logoutButtonHandle = () => {
    localStorage.removeItem('loggedUser')
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
            DISHE APP
          </Typography>
          {localStorage.getItem('loggedUser') && <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button sx={{ color: '#fff' }}>
              <Link style={{ textDecoration: "none", color: '#ffffff' }} to='/main'>Dishe List</Link>
            </Button>
            <Button sx={{ color: '#fff' }}>
              <Link style={{ textDecoration: "none", color: '#ffffff' }} to='/ranking'>Dishe Ranking</Link>
            </Button>
            <Button onClick={logoutButtonHandle} sx={{ color: '#fff' }}>
              <Link style={{ textDecoration: "none", color: '#ffffff' }} to='/'>Logout</Link>
            </Button>
          </Box>}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
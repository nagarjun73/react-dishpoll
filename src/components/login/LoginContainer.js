import { Box, Typography, TextField, Button, Stack } from "@mui/material"
import { useState, useContext } from "react"
import { UserContext } from "../../App"
import { useNavigate } from 'react-router-dom'

const LoginContainer = (props) => {
  const [formData, setFormData] = useState({ username: '', password: '' })
  const { user, userDispatch } = useContext(UserContext)
  const navigate = useNavigate()
  console.log(user, "userr")

  const loginHandleFunction = (e) => {
    e.preventDefault()

    const foundUser = user.users.find((ele) => {
      return ele.username == formData.username
    })

    if (foundUser) {
      if (foundUser.password === formData.password) {
        console.log("user logged in");
        userDispatch({ type: "LOG_IN", payload: foundUser })
        navigate('/main')
      } else {
        console.log("incorrect password")
      }
    } else {
      console.log("user not found");
    }
  }

  return (
    <Box>
      <Typography variant="h3">Login</Typography>
      <Box component="form" onSubmit={loginHandleFunction}>
        <Stack justifyContent='center' width="50vw">
          <TextField
            label="username"
            variant="outlined"
            type='text'
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            // error={errors.email && true}
            // helperText={.errors.email}
            sx={{ backgroundColor: "white" }} />

          <TextField
            label="password"
            variant="outlined"
            type='password'
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            // error={email && true}
            // helperText={email}
            sx={{ backgroundColor: "white" }} />

          <Button type="submit" variant="contained">Login</Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default LoginContainer
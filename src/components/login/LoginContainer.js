import { Box, Typography, TextField, Button, Stack } from "@mui/material"
import { useState, useContext } from "react"
import { UserContext } from "../../App"
import { useNavigate } from 'react-router-dom'
import _ from 'lodash'
import toast, { Toaster } from 'react-hot-toast';

const LoginContainer = (props) => {
  const [formData, setFormData] = useState({ username: '', password: '' })
  const [formError, setFormError] = useState({})
  const { user, userDispatch } = useContext(UserContext)
  const navigate = useNavigate()

  const errors = {}

  const runValidaion = () => {
    if (formData.username.trim().length === 0) {
      errors.username = "username should not be Empty."
    }

    if (formData.password.trim().length === 0) {
      errors.password = "password should not be Empty"
    }
  }

  const loginHandleFunction = (e) => {
    e.preventDefault()

    //validation check
    runValidaion()

    console.log(_.isEmpty(errors), "errr");

    if (_.isEmpty(errors)) {
      //check user present
      const foundUser = user.users.find((ele) => {
        return ele.username == formData.username
      })
      if (foundUser) {
        //Verifying password
        if (foundUser.password === formData.password) {
          toast.success("user logged in");
          //setting logged in user
          userDispatch({ type: "LOG_IN", payload: foundUser })
          localStorage.setItem('loggedUser', JSON.stringify(foundUser))
          //redirecting to result page
          navigate('/main')
        } else {
          toast.error("incorrect password")
        }
      } else {
        toast.error("user not found")
      }
    } else {
      setFormError(errors)
    }
  }

  return (
    <Box paddingTop="20vh" >
      <Toaster />
      <Box component="form" sx={{ display: "flex", justifyContent: "center" }} onSubmit={loginHandleFunction}>
        <Stack justifyContent='center' width="50vw" spacing={5}>
          <Typography variant="h3">Login</Typography>
          <TextField
            label="username"
            variant="outlined"
            type='text'
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            error={formError.username && true}
            helperText={formError.username}
            sx={{ backgroundColor: "white" }} />

          <TextField
            label="password"
            variant="outlined"
            type='password'
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            error={formError.password && true}
            helperText={formError.password}
            sx={{ backgroundColor: "white" }} />

          <Button type="submit" variant="contained">Login</Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default LoginContainer
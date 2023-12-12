import { Box, Typography, TextField, Button, Stack } from "@mui/material"
import { useState } from "react"

const Login = (props) => {
  const [formData, setFormData] = useState({ username: '', password: '' })

  const loginHandleFunction = (e) => {
    e.preventDefault()

    console.log(formData);
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
            // error={formik.errors.email && true}
            // helperText={formik.errors.email}
            sx={{ backgroundColor: "white" }} />

          <TextField
            label="password"
            variant="outlined"
            type='password'
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            // error={formik.errors.email && true}
            // helperText={formik.errors.email}
            sx={{ backgroundColor: "white" }} />

          <Button type="submit" variant="contained">Login</Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default Login
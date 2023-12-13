const runValidaion = (formData) => {
  const errors = {}
  if (formData.username.trim().length === 0) {
    errors.username = "username should not be Empty."
  }

  if (formData.password.trim().length === 0) {
    errors.password = "password should not be Empty"
  }
  return errors
}

export default runValidaion
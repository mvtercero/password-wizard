export const isValidPassword = (values) => {
  let errors = {}
  // const regex= /^(?=\w*\d)(?=\w*[A-Z])$/
  if (!values.password1) {
    errors.password1 = 'La contraseña maestra es necesaria'
  }
  // if(!regex.test(values.password1)) {
  //   errors.password1 = 'La contraseña debe tener un número y una mayúscula'
  // }
  if (!values.password2) {
    errors.password2 = 'Debes repetir la contraseña'
  }
  if (values.password1 && values.password1.length < 8) {
    errors.password1 = 'La contraseña debe tener mínimo 8 caracteres'
  }
  if (values.password1 && values.password1.length > 24) {
    errors.password1 = 'La contraseña debe tener máximo 24 caracteres'
  }
  if (values.password1 !== values.password2) {
    errors.password2 = 'Las contraseñas no son iguales'
  }
  // if (!values.email) {
  //   errors.email = 'Email address is required'
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Email address is invalid'
  // }
  return errors
}
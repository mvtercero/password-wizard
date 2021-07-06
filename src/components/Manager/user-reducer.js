export const DefaultState = {
  password1: '',
  password2: '',
  clue: ''
}

export const PasswordReducer = (password, { type, payload }) => {
  switch (type) {
    case 'SET_PASSWORD':
      return {
        ...password,
        ...payload,
      }
    default:
      return password
  }
}

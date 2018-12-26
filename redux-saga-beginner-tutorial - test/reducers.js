export default function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'INCREMENT_IF_ODD':
      return (state % 2 !== 0) ? state + 1 : state
    case 'DECREMENT':
      return state - 1
      case 'TODO_CREATED':
      return state
      case 'SHOW_CONGRATULATION':
      alert("HoHo")
      return state
      case 'LOGIN_REQUEST':

      return state
      case 'LOGOUT':
      console.log('logout')
      return state

      case 'LOGIN_SUCCESS':
      
      return state
    default:
      return state
  }
}

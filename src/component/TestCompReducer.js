export default function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + action.data
    case "DECREASE":
      return state - action.data
    case "INIT":
      return 0
    default:
      return state
  }
}
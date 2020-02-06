let idx = 0;
const users = (state = [], action) => {
  switch(action.type) {
    case "ADD_USER":
      if (action.payload.gender === "@UserGender"){
        action.payload.gender = "";
      }
      action.payload.id = idx +1;
      idx = action.payload.id;
      return state.concat([action.payload]);
    default:
      return state;
  }
}
export default users;

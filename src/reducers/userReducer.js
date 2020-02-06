let idx = 0;
let patientsData;
const users = (state = [], action) => {
  switch(action.type) {
    case "ADD_USER":
      if (action.payload.gender === "@UserGender"){
        action.payload.gender = "";
      }
      action.payload.id = idx +1;
      idx = action.payload.id;
      patientsData = [action.payload.id,action.payload.name];
      return state.concat([action.payload]);
    default:
      return state;
  }
}
export default users;

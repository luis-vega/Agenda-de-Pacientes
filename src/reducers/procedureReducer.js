let idxp = 0;
const procedures = (state = [], action) => {
  switch(action.type) {
    case "ADD_PROCEDURE":
      action.payload.id = idxp +1;
      idxp = action.payload.id
      return state.concat([action.payload]);
    case "INPROGRESS_PROCEDURE":
      action.payload.status = "In Progress";
      return state.map((procedure)=>procedure.id === action.payload.id ? {...procedure}:procedure)
    case "FINISHED_PROCEDURE":
      return state.filter((procedure)=>procedure.id !== action.payload.id);
    default:
      return state;
  }
}
export default procedures;

const doctors = (state = [], action) => {
  let doctors = [
        {id:"1", name:"Dr. John Doe"},
        {id:"2", name:"Dr. Gregg House"},
        {id:"3", name:"Dr. Tom Brady"}
    ];
  switch(action.type) {
    case "ADD_DOCTORS":
      return state.concat(doctors);
    default:
      return state;
  }
}
export default doctors;

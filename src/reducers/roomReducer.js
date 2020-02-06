const rooms = (state = [], action) => {
  let rooms = [
      {id:"1", name:"Room 001"},
      {id:"2", name:"Room 002"},
      {id:"3", name:"Room 003"},
    ];
  switch(action.type) {
    case "ADD_ROOMS":
      return state.concat(rooms);
    default:
      return state;
  }
}
export default rooms;

const rooms = (state = [], action) => {
  let rooms = [
      {id:"1", name:"Room Prenzlauer Berg"},
      {id:"2", name:"Room Mitte"},
      {id:"3", name:"Room Kreuzberg"},
      {id:"4", name:"Room Friedrichshain"},
      {id:"5", name:"Room Charlottenburg"}
    ];
  switch(action.type) {
    case "ADD_ROOMS":
      return state.concat(rooms);
    default:
      return state;
  }
}
export default rooms;

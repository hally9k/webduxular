
const INITIAL_STATE = 'blue';

export default (state = INITIAL_STATE, action) => {
  if (!action || !action.type) {
      return state;
  }

  switch(action.type){
    case 'CHANGE_COLOR':
      return action.payload.color;
    default:
      return state;
  }

}

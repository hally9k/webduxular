
import deepFreeze from 'deep-freeze';

import color from './color.reducers';

describe('color reducers', () => {
  it('change color', () => {

    let state = 'blue';

    let action = {
      type: 'CHANGE_COLOR',
      payload: {
        color: 'red'
      }
   };

   let newState = color(state, action);

    expect(newState).to.equal('red');
  })
})

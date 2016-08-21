
import deepFreeze from 'deep-freeze';

import chart from './chart.reducers';

import INITIAL_STATE from './chart.reducers.initialState.json';
//
// describe('chart.reducers -> randomizeData()', () => {
//   it('randomizes data.', () => {
//
//     let state = INITIAL_STATE;
//
//     deepFreeze(state);
//
//     let action = {
//       type: 'RANDOMIZE_DATA'
//    };
//
//
//    let newState = chart(state, action);
//
//     expect(newState.options.series[0].data.length).to.equal(6);
//     expect(newState.options).not.to.deep.equal(state.options.series);
//   })
// })

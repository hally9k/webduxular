import { fromJS } from 'immutable';
import _ from 'lodash';

import INITIAL_STATE from './chart.reducers.initialState.json';

export default (state = INITIAL_STATE, action) => {
  if (!action || !action.type) {
      return state;
  }

  switch(action.type){
    case 'RANDOMIZE_DATA':
      let map = fromJS(state);
      let data = map.getIn(['options', 'series']).toJS();
      let randomizedData = randomizeData(data);
      let map2 = map.setIn(['options', 'series'], randomizedData);
      return map2.toJS();
    case 'TOGGLE_CHART':
      let tc_map = fromJS(state);
      let show = tc_map.get('showChart');
      let tc_map2 = tc_map.set('showChart', !show);
      return tc_map2.toJS();
    default:
      return state;
  }

}

function randomizeData(allSeries) {
  _.each(allSeries, (series) => {
    _.each(series.data, (value, index) => {
      series.data[index] = _.random(0, 150000);
    });
  })
  return allSeries;
}

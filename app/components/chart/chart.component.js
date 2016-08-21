import './chart.component.css';

import actions from '../../actions';

class ChartController {
  /*@ngInject*/
  constructor($scope, $ngRedux) {
  }
}

export default angular
.module('webduxular.components.chart', [])
.component('chart', {
  template: require('./chart.component.html'),
  controller: ChartController,
  bindings: {
    chartOptions: '<',
    randomizeDataHandler: '&'
  }
})
.name;

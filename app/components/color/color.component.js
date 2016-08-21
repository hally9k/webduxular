
import actions from '../../actions';

class ColorController {
  /*@ngInject*/
  constructor($scope) {
  }
}

export { ColorController };

export default angular
.module('webduxular.components.color', [])
.component('color', {
  template: require('./color.component.html'),
  controller: ColorController,
  bindings: {
    color: '<',
    changeColorHandler: '&'
  }
})
.name;


import './color.component.css';
import colorTemplate from './color.component.html';

export default angular
.module('webduxular.components.color', [])
.component('color', {
  template: colorTemplate,
  bindings: {
    color: '<',
    changeColorHandler: '&'
  }
})
.name;

import './root.module.css';
import rootModuleTemplate from './root.module.html';

class RootModuleController {
  constructor($scope) {

    $scope.color = 'blue';

    $scope.changeColor = (newColor) => {
      $scope.color = newColor;
    }

  }
}

export default
angular.module('webduxular.modules.root', [])
.component('root', {
  template: rootModuleTemplate,
  controller: RootModuleController
})
.name;

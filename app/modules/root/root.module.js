
import actions from '../../actions';

import './root.module.css';
import rootModuleTemplate from './root.module.html';

class RootModuleController {
  constructor($ngRedux, $scope) {

    function mapStateToParams(state) {
        return {
          state: state
        };
    }

    let disconnect = $ngRedux.connect(
        mapStateToParams,
        actions.color
    )(this);

    $scope.$on('$destroy', disconnect);

  }
}

export default
angular.module('webduxular.modules.root', [])
.component('root', {
  template: rootModuleTemplate,
  controller: RootModuleController
})
.name;


import rootModuleTemplate from './root.module.html';

import actions from '../../actions';

class RootModuleController {
  constructor($ngRedux, $scope) {

    function mapStateToParams(state) {
      return {
        state: state
      };
    }

    let disconnect = $ngRedux.connect(
        mapStateToParams,
        actions.chart
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

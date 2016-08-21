
import actions from '../../actions';

export default class ColorRouteController{
  constructor($ngRedux, $scope) {

    function mapStateToParams(state) {
      return {
        state: state
      };
    }

    let disconnect = $ngRedux.connect(
        mapStateToParams,
        actions.router
    )($scope);

    $scope.$on('$destroy', disconnect);

    $scope.changeColorHandler = function(newColor) {
      $scope.stateTransitionTo('root.color', { color: newColor });
    }

  }
}

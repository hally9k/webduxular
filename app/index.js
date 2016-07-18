import 'angular';
import ngRedux from 'ng-redux';

import store from './store';
import modules from './modules';
import components from './components';

export default angular
.module('webduxular', [
  ngRedux,
  modules,
  components
])
.config(store)
.name;

angular.bootstrap(document, ['webduxular']);

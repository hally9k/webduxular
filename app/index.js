import 'angular';

import modules from './modules';
import components from './components';

export default angular
.module('webduxular', [
  modules,
  components
])
.name;

angular.bootstrap(document, ['webduxular']);

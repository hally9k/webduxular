
import 'bootstrap/dist/css/bootstrap.css';
import 'kendo/css/web/kendo.common.css';
import 'kendo/css/web/kendo.material.css';
import 'kendo/css/dataviz/kendo.dataviz.css';
import 'kendo/css/dataviz/kendo.dataviz.material.css';

import 'angular';
import 'kendo/js/kendo.all.js';
import ngRedux from 'ng-redux';
import uiRouter from 'angular-ui-router';
import ngReduxRouter from 'redux-ui-router';

import store from './store';
import router from './router';

import modules from './modules';
import components from './components';

export default angular
  .module('webduxular', [
    'kendo.directives',
    uiRouter,
    ngRedux,
  	ngReduxRouter,
    modules,
    components
  ])
 .config(router)
 .config(store)
 .name;

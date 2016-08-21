import colorRoute from './color';

export default   /*@ngInject*/

($urlRouterProvider, $stateProvider) => {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('root', {
            url: '/',
            template: '<root></root>'
        })
          .state('root.color', {
              url: 'color/',
              controller: colorRoute.controller,
              template: colorRoute.template,
              params: colorRoute.params,
              controllerAs: '$ctrl'
          })

}

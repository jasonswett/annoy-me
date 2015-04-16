'use strict';

import MainCtrl from './main/main.controller';
import NavbarCtrl from '../components/navbar/navbar.controller';

angular.module('annoyMe', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
  .controller('MainCtrl', MainCtrl)
  .controller('NavbarCtrl', NavbarCtrl)

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;

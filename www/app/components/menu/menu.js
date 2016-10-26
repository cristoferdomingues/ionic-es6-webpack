import angular from 'angular';
import uiRouter from 'angular-ui-router';
import component from './menu.component';
import config from '../../config';

export default angular.module('menu', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            template: '<menu></menu>'
        });
})

.component('menu', component)

.name;
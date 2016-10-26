import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Resource from 'angular-resource';
import loginComponent from './login.component';
import loginFactory from './login.factory';
import config from '../../config';

export default angular.module('login', [
  uiRouter,
  Resource
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('app.login', {
      url: '/login',
      views: {
	      'menuContent': {
	        templateUrl:`${config.pathHtml}login/login.html`
		    }
	    }
    });
})

.component('loginView', loginComponent)
.factory('login.factory', loginFactory)
.name; 


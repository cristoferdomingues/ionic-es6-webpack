import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'ionic-sdk/release/js/ionic.bundle';
import Components from './components/components';


angular.module('app', ['ionic', Components])

.run(($ionicPlatform) => {
  
  $ionicPlatform.ready(() => {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

})

.config(($stateProvider, $urlRouterProvider) => {
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});

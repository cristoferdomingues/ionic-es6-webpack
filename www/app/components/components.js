import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Menu from './menu/menu';
import Login from './login/login';

export default  angular.module('app.components', [
  Menu,
  Home.name,
  About.name,
  Login
]).name;

/* Created by Administrator on 2016/11/25.*/
var myApp = angular.module('myApp', ["ui.router", "oc.lazyLoad"]);
myApp.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", '$httpProvider',
    function ($provide, $compileProvider, $controllerProvider, $filterProvider, $httpProvider) {
        myApp.controller = $controllerProvider.register;
        myApp.directive = $compileProvider.directive;
        myApp.filter = $filterProvider.register;
        myApp.factory = $provide.factory;
        myApp.service = $provide.service;
        myApp.constant = $provide.constant;
    }]);
myApp.constant('Modules_Config', [
    {
        name: 'treeControl',
        serie: true,
        files: []
    }
]);
myApp.config(["$ocLazyLoadProvider", "Modules_Config", routeFn]);
function routeFn($ocLazyLoadProvider, Modules_Config, $scope) {
    $ocLazyLoadProvider.config({
        debug: false,
        events: false,
        modules: Modules_Config,
        name: "BBMatrix"
    });
}
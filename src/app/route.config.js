myApp.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", routeFn]);

function routeFn($stateProvider, $urlRouterProvider, $locationProvider) {
    var ver = version;
    $urlRouterProvider.otherwise("/index");
    $stateProvider
        .state("Index", {
            url: "/index",
            templateUrl: "/components/index/index.html" + ver,
            controller: "indexController",
            resolve: {
                deps: ["$ocLazyLoad", function ($ocLazyLoad) {
                    return $ocLazyLoad.load(["/components/index/index.js" + ver]);
                }]
            }
        })
}
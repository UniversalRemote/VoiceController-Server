
var app = angular.module("VoiceController", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/console", {
            templateUrl: "views/console.html",
            controller: "Consoled"
        });
});

app.config(function($sceProvider) {
    $sceProvider.enabled(false);
});
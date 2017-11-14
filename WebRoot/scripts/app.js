
var app = angular.module("VoiceController", ["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl: "views/console.html",
            controller: "Consoled"
        });
});

app.config(function($sceProvider) {
    // Completely disable SCE.  For demonstration purposes only!
    // Do not use in new projects or libraries.
    $sceProvider.enabled(false);
});
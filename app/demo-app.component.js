(function() {
    "use strict";
    
    var module = angular.module("ngDemo1point5");
    
    module.component("demoApp", {
        templateUrl: "/app/demo-app.component.html",
        $routeConfig: [
            { path: "/repo", component:"repoList", name: "Repositories" },
            { path: "/dashboard", component: "dashboard", name: "Dashboard" },
            { path: "/**", redirectTo: ["Repositories", ""] }
        ]                   
    });
    
    module.component("dashboard", {
       template: "Dashboard ..." 
    });
     
}());
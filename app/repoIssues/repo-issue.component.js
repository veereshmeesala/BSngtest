(function () {

    var module = angular.module("ngDemo1point5");

    function fetchIssues($http, login, name) {
        return $http.get("https://api.github.com/search/issues?q=repo:" + login + "/" + name)
                    .then(function(response) {
                        return response.data;
                    });
    }

    var controller = function($http) {
        var vm = this;  
        vm.listIssues = [];        
        
        vm.$routerOnActivate = function(next, previous) {
            vm.id = next.params.id;
            vm.login = next.params.login;
            vm.name = next.params.name;
            // vm.forks = next.params.forks;
            // vm.open_issues = next.param.openIssues;
            // vm.watchers = next.param.watchers;
            
            fetchIssues($http, vm.login, vm.name).then(function(results) {
                vm.listIssues = results.items;    
            });
        };

        // vm.$onInit = function() {
        //     fetchIssues($http, vm.login, vm.name).then(function(results) {
        //         vm.listIssues = results.items;    
        //     });
        // };
    };

    module.component("repoIssues", {
        templateUrl: "/app/repoIssues/repo-issue.component.html",
        controllerAs: "vm",
        controller: ["$http", controller]
    });

} ());
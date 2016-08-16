(function () {
    "use strict";

    var module = angular.module("ngDemo1point5");

    function fetchRepos($http, name) {
        return $http.get("https://api.github.com/search/repositories?q=" + name)
            .then(function (response) {
                return response.data;
            });
    }

    function controller($http) {

        var vm = this;
        vm.repositories = [];
        vm.search = 'angular';

        vm.$onInit = function () {
            fetchRepos($http, vm.search).then(function (repos) {
                vm.repositories = repos.items;
            });
        };

        vm.loadRepo = function () {
            vm.repositories = [];
            if (vm.search != "") {
                fetchRepos($http, vm.search).then(function (repos) {
                    vm.repositories = repos.items;
                });
            }

        };

        vm.goToDashboard = function (forks, openIssues, watchers) {
            vm.$router.navigate(["Dashboard", { forks: forks, issues: openIssues, watchers: watchers }]);
        };

    }

    module.component("repoList", {
        bindings: {
            "$router": "<"
        },
        templateUrl: "/app/repoList/repo-list.component.html",
        controllerAs: "vm",
        // directives: ['vertilizeContainer,', 'vertilize'],
        controller: ["$http", controller]
    });

} ());
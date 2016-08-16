(function () {
    "use strict";

    var module = angular.module("ngDemo1point5");

    function controller(JustGage) {

        var vm = this;

        vm.$routerOnActivate = function (next, previous) {
            vm.forks = next.params.forks;
            vm.issues = next.params.issues;
            vm.watchers = next.params.watchers;

        };

        vm.$OnInit = function () {
            // vm.dflt = {
            //     min: 0,
            //     max: 200,
            //     donut: true,
            //     gaugeWidthScale: 0.6,
            //     counter: true,
            //     hideInnerShadow: true
            // }

        };
    }

    module.component("dashboard", {
        bindings: {
            "$router": "<"
        },
        templateUrl: "/app/dashboard/dashboard.component.html",
        controllerAs: "vm",
        directives: ['ngJustGage'],
        controller: [controller]
    });

} ());
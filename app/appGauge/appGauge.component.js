(function () {
    "use strict";

    var module = angular.module("ngDemo1point5");

    function controller(Justgage) {
        var vm = this;

        vm.$onInit = function () {
            vm.id = "test";
            vm.value = 30,
            vm.min = 0,
            vm.max = 100,
            vm.title = "test";

            var g = new JustGage({
                id: vm.id,
                value: vm.value,
                min: vm.min,
                max: vm.max,
                title: vm.title
            });
        };
    }

    module.component("appGauge", {
        bindings: {
            id: "@",
            value: "<",
            min: "<",
            max: "<",
            title: "<"
        },
        templateUrl: "/app/appGauge/appGauge.component.html",
        controllerAs: "vm",
        controller: ['JustGage', controller]
    });

} ());
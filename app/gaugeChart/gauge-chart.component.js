(function () {
    "use strict";

    var module = angular.module("ngDemo1point5");

    function controller() {
        var vm = this;
        vm.specs = {
            currentValue: 45, centerX: 300, centerY: 300, radius: 200,
												maxValue: 180, gradientInterval: 10, gradients: []
        };

        for (var value = 0, offset = 0;
            value < vm.specs.maxValue;
            value += vm.specs.gradientInterval, offset += 100 / 18) {
            vm.specs.gradients.push({ value: value, offset: offset });
        }

        var getCoordinatesForAngle = function (centerX, centerY, radius, angleInDegrees) {
            var angleInRadians = (angleInDegrees - 180) * Math.PI / 180.0;
            return {
                x: parseInt(centerX + (radius * Math.cos(angleInRadians))),
                y: parseInt(centerY + (radius * Math.sin(angleInRadians)))
            }
        }

        var getArcPathForAngle = function (startingAngle, endingAngle, radius) {
            var startingPt = getCoordinatesForAngle(300, 300, radius, startingAngle);
            var endingPt = getCoordinatesForAngle(300, 300, radius, endingAngle);

            return ["M", startingPt.x, startingPt.y, "A", radius, radius, 0, 0, 1, endingPt.x, endingPt.y].join(" ");
        }

        // vm.displayGauge = function () {
        
        // }

        vm.$onInit = function () {
            // vm.displayGauge();
            vm.value = getArcPathForAngle(0, vm.specs.currentValue, 200);
            vm.background = getArcPathForAngle(0, 180, 200);
            vm.gradients = getArcPathForAngle(0, 180, 210);

            vm.maxValueCoordinates = getCoordinatesForAngle(300, 300, 210, 180);
        };
    }

    module.component("gaugeChart", {
        bindings: {
            value: "@"
        },
        templateUrl: "/app/gaugeChart/gauge-chart.component.html",
        controllerAs: "vm",
        controller: [controller]
    });

} ());
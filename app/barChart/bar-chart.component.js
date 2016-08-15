(function () {
    "use strict";

    var module = angular.module("ngDemo1point5");

    function controller() {

        var vm = this;
        vm.specs = {
            height: 30,
            padding: 5,
            fontStyle: '10pt arial',
            fontHeight: 10,
            gradientInterval: 50,
            gradients: [],
            bars: [{ color: '#2A9FBC', width: 50, text: 'Forks' },
                { color: '#F15B2A', width: 60, text: 'Open_issues' },
                { color: '#A62E5C', width: 90, text: 'Watchers' }]
        };

        vm.$onInit= function () {
            // angular.forEach(vm.specs.bars, function(item){
            //     for(var i=0; i < vm.values.length; i++){
            //         // if(item.text == vm.values[i].key){
            //         //     item.width = vm.values[i].value/;
            //         // }
            //         console.log(vm.values[i].key);
            //     }
            // });
            var ctx = document.createElement('canvas').getContext('2d');
            var gradients = [];

            ctx.font = vm.specs.fontStyle;
            vm.specs.labelWidth = 0;
            vm.specs.overallWidth = 0;
            angular.forEach(vm.specs.bars, function (bar, index) {
                vm.specs.labelWidth = Math.max(vm.specs.labelWidth, ctx.measureText(bar.text).width);
                vm.specs.overallWidth = Math.max(vm.specs.overallWidth, bar.width);
            });

            for (var i = 0; ; i += vm.specs.gradientInterval) {
                gradients.push({ text: i, offset: i });
                if (i > vm.specs.overallWidth)
                    break;
            }
            vm.specs.gradients = gradients;

            vm.specs.overallHeight = vm.specs.bars.length * (1 * vm.specs.height + vm.specs.padding);
        };

    }

    module.component("barChart", {
        bindings:{
            values: "<"
        },
        templateUrl: "/app/barChart/bar-chart.component.html",
        controllerAs: "vm",
        controller: [controller]
    });

} ());
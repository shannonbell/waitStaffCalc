angular.module('myApp', ['ngRoute', 'ngAnimate'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl : 'home.html',
            controller : 'MyCtrl'
        })
        .when('/new-meal', {
            templateUrl : 'new-meal.html',
            controller : 'MyCtrl'
        })
        .when('/my-earnings', {
            templateUrl : 'my-earnings.html',
            controller : 'MyCtrl'
        })
        .otherwise('/');
    }])
    .controller('MyEarningCtrl', function($scope, $rootScope) {
        $scope.totalTip = $rootScope.totalTip;
        $scope.mealCount = $rootScope.mealCount;
        $scope.averageTipPerMeal = $rootScope.averageTipPerMeal;
    })
    .controller('MyCtrl', function($scope, $rootScope) {

        var totalTipVal = 0;
        var mealCountVal = 0;


        $scope.submit = function() {
            if( $scope.waitstaffCalcForm.$valid ) {
                $scope.subTotal =  ($scope.mealPrice * ($scope.taxRate / 100)) + $scope.mealPrice;
                $scope.tip =  $scope.subTotal * ($scope.tipPercentage / 100);
                $scope.total = $scope.subTotal + $scope.tip;

                totalTipVal = totalTipVal + $scope.tip;
                $rootScope.totalTip = totalTipVal;

                mealCountVal = mealCountVal + 1;
                $rootScope.mealCount = mealCountVal;

                $rootScope.averageTipPerMeal = totalTipVal / mealCountVal;
            }
        }

        $scope.reset = function() {

            clearCalc();

            $scope.subTotal = '';
            $scope.tip = '';
            $scope.total = '';
            $scope.totalTip = '';
            totalTipVal = 0;

            $scope.mealCount = '';
            mealCountVal = 0;

            $scope.averageTipPerMeal = '';
        }

        $scope.cancel = function() {
            clearCalc();
        }

        function clearCalc() {
            $scope.mealPrice = '';
            $scope.taxRate = '';
            $scope.tipPercentage = '';
        }

    });
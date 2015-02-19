angular.module('myApp', [])


    .controller('MyCtrl', function($scope) {

        var totalTipVal = 0;
        var mealCountVal = 0;


        $scope.submit = function() {
            if( $scope.waitstaffCalcForm.$valid ) {
                $scope.subTotal =  ($scope.mealPrice * ($scope.taxRate / 100)) + $scope.mealPrice;
                $scope.tip =  $scope.subTotal * ($scope.tipPercentage / 100);
                $scope.total = $scope.subTotal + $scope.tip;

                totalTipVal = totalTipVal + $scope.tip;
                $scope.totalTip = totalTipVal;

                mealCountVal = mealCountVal + 1;
                $scope.mealCount = mealCountVal;

                $scope.averageTipPerMeal = totalTipVal / mealCountVal;
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
(function () {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.message = "";
    $scope.listOfDishes = "";
    $scope.checkLunch = function() {
      if (lunchEmpty($scope.listOfDishes)) {
        $scope.message = "Please enter data first";
        return;
      }
      if (lunchOk($scope.listOfDishes)) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    };

    function lunchEmpty(listOfDishes) {
      return listOfDishes == "";
    }

    function lunchOk(listOfDishes) {
      return String(listOfDishes).split(",").length <= 3;
    }

  };
}
)();

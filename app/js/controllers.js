'use strict';

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }])
  .controller('HomeCtrl',['$scope','expService',function($scope,expService){
    expService.getExpense()
  }])
  .controller('AddExpenseCtrl',['$scope','categoryList','expService',function($scope,categoryList,expService){
    $scope.categories = categoryList;
    $scope.submit = function() {
      expService.saveExpense($scope.expense);
    }
  }])
  .controller('ViewSummaryCtrl',['$scope','expService',function($scope,expService){
    $scope.expenses = expService.getExpense();
  }])

'use strict';

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', ['$scope', function($scope) {

  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

  }])
  .controller('HomeCtrl',['$scope',function($scope){

  }])
  .controller('AddExpenseCtrl',['$scope','categoryList','expService',function($scope,categoryList,expService){
    $scope.categories = categoryList;
    $scope.submit = function() {
      expService.saveExpense($scope.expense);
    }
  }])

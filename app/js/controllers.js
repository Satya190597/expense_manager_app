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
  .controller('ViewSummaryCtrl',['$scope','expService','categoryList',function($scope,expService,categoryList){
    $scope.expenses = expService.getExpense();
    $scope.summaryies = []
    var categories = categoryList
    categories.forEach(element => {
      var total = expService.getCategoryTotal(element)
      $scope.summaryies.push({
        category: element,
        amount: total
      })
    });
  }])

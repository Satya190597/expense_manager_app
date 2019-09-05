'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
  .value('version', '0.1')
  .value('categoryList',["Food","Fuel","Grocery","Entertainment"])
  .factory('expService',[function(){
    var prefix = 'exp-mgr';
    return {
      saveExpense : function(data){
        var timeStamp = Math.round(new Date().getTime());
        var key = prefix + timeStamp;
        data = JSON.stringify(data);
        localStorage[key] = data;
      }
    }
  }])

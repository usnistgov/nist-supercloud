'use strict';

/**
 * @ngdoc service
 * @name nistSupercloudApp.responseTimes
 * @description
 * # responseTimes
 * Service in the nistSupercloudApp.
 */
angular.module('nistSupercloudApp')
  .service('responseTimes', ['$http', function ( $http) {
    var virtualMachine;
    this.fetch =  function(name) {

      $http.get("http://192.168.15.101:8080/api/latency/"+name)
        .then(function (res) {
          console.log("responseTimes " + JSON.stringify(res.data));
          virtualMachine = res.data;
        });
      return virtualMachine;
    }
    var ret;
    this.vmList =  function() {

      $http.get("http://192.168.15.101:8080/api/vms")
        .then(function (res) {
          console.log("vmList " + JSON.stringify(res.data));
          ret = res.data;
        });
      return ret;
    }



    //return virtualMachine;
  }]);

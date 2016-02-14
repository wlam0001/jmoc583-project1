var app = angular.module('senators', []);

app.controller('SenatorsController', ['$http', function($http) {
  this.senators = [];
  var _this = this;


  $http.get('/js/senator.json')
    .success(function(data) {
        console.log(data);
        console.log(this);
        _this.senators = data;
    })
    .error(function(msg) {
        console.log("This request failed.\n" + msg);
    });


}]);

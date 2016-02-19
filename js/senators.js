var app = angular.module('senators', []);

app.controller('SenatorsController', ['$http', "$scope",function($http, $scope) {
  this.senators = [];
  var _this = this;

  $scope.selected = {};
  // $scope.moreCandidates = false;
    $scope.selectPerson = function (person) {
        $scope.selected.senator = person;

    };

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

var app = angular.module('senators', []);

app.controller('SenatorsController', ['$http', function($http) {
  this.senators = [];
  var _this = this;


  $http.get('/js/senator.json')
    .success(function(data) {
        console.log(data);
        console.log(this);
      //   for (var i = 0; i < 100; i++ ) {
      //  if (i % 7 == 0) _this
      //  .senators.push([]);
      //    _this.senators[ _this.senators.length-1].push(data[i]);
      //   }
        for (var i = 0; i < 100; i++) {
            if (i % 10 == 0) {
              _this.senators.push([]);
            }
            _this.senators[_this.senators.length-1].push(data[i]);
        // _this.senators = data;
      }
    })
    .error(function(msg) {
        console.log("This request failed.\n" + msg);
    });


}]);

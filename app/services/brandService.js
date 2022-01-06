app.factory('brandService', function($http) {
    var getData = function() {
        return $http({
            method:"GET", 
            url:"https://parallelum.com.br/fipe/api/v1/carros/marcas",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(result) {
            return result.data;
        });
    };

    return { getData: getData };
});
app.factory('modelService', function($http) {
    var getData = function(id) {
        return $http({
            method:"GET", 
            url:"https://parallelum.com.br/fipe/api/v1/carros/marcas/"+id+"/modelos",
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function(result) {
            return result.data;
        });
    };

    return { getData: getData };
});
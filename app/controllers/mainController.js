app.controller('mainController', [
    "$scope",
    "brandService",
    "modelService",
    function(
        $scope,
        brandService,
        modelService
    ) {

        $scope.currentPageBrand = 0;
        $scope.pageSizeBrand = 10;

        $scope.currentPageModel = 0;
        $scope.pageSizeModel = 10;
        
        $scope.brands_json = [];
        $scope.model_json = [];

        $scope.active = 0;
        $scope.loadingBrand = false;
        $scope.loadingModel = false;
        $scope.showModel = false;
        $scope.errorBrand = false;
        $scope.errorMessageBrand = "";
        $scope.errorModel = false;
        $scope.errorMessageModel = "";

        $scope.numberOfPagesBrand = function() {
            return Math.ceil($scope.brands_json.length/$scope.pageSizeBrand);                
        }
        $scope.numberOfPagesModel = function() {
            return Math.ceil($scope.model_json.length/$scope.pageSizeModel);                
        }
        
        $scope.getBrands = function() {
            $scope.loadingBrand = true;
            var brands = brandService.getData();
            brands.catch(function (err) {
                $scope.loadingBrand = false;
                $scope.errorBrand = true;
                $scope.errorMessageBrand = "Ocorreu um erro ao buscar os dados.";
            }).then(function(result) {
                $scope.brands_json = result;
                $scope.loadingBrand = false;
            });
        };
        $scope.getBrands();

        $scope.getModel = function(id) {
            $scope.loadingModel = true;
            $scope.showModel = true;
            $scope.active = id;

            var model = modelService.getData(id);
            model.catch(function (err) {
                $scope.loadingModel = false;
                $scope.errorModel = true;
                $scope.errorMessageModel = "Ocorreu um erro ao buscar os dados."
            }).then(function(result) {
                $scope.currentPageModel = 0;
                $scope.pageSizeModel = 10;
                $scope.model_json = result.modelos;
                $scope.loadingModel = false;
            });
        }
    }
]);

app.filter('startFromBrand', function() {
    return function(input, start) {
        start = +start;
        return input.slice(start);
    }
});


app.filter('startFromModel', function() {
    return function(input, start) {
        start = +start;
        return input.slice(start);
    }
});
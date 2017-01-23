angular.module('myApp', ['dataGrid', 'pagination', 'ngMaterial','ngMaterial', 'ngMessages','ui.materialize'])
    .controller('myAppController', ['$scope', 'myAppFactory', function ($scope, myAppFactory) {

                    $scope.dateFrom = new Date();
                        $scope.minDate = new Date(
                            $scope.dateFrom.getFullYear() - 2,
                            $scope.dateFrom.getMonth(),
                            $scope.dateFrom.getDate());

                    $scope.dateTo = new Date();     
                        $scope.maxDate = new Date(
                            $scope.dateTo.getFullYear(),
                            $scope.dateTo.getMonth(),
                            $scope.dateTo.getDate());    
                        $scope.onlyWeekendsPredicate = function(date) {
                            var day = date.getDay();
                            return day === 0 || day === 6;
                            alert( $scope.minDate);
                        }

        

        $scope.gridOptions = {
            data: [],
            urlSync: false
        };
        $scope.loadData = function () { 
            $scope.title = '';
            $scope.dateFrom = '';
            $scope.dateTo = '';            
           
            myAppFactory.getData().then(function (responseData) {           
            $scope.gridOptions.data = responseData.data;           
           })
        };

         $scope.loadData();

    }])
  


    .factory('myAppFactory', function ($http) {
        return {
            getData: function () {
                return $http({
                    method: 'GET',
                    url: 'data/data.json'
                });
            }
        }
    });


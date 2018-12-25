/**
 * Created by mirajehossain on 1/26/2017.
 */
app.controller('contactController', ['$scope','apiHandler', function ($scope,apiHandler) {
    $scope.contact = {}


    // apiHandler.getTitlenSlogan().then(function (success) {
    //     $scope.TitleSlogan = success;
    //     console.log($scope.TitleSlogan);
    // });
    //
    $scope.saveContact = function (contact) {
        apiHandler.AddPostCont(contact).then(function (succes) {
            console.log(succes);
            $scope.contact.name = "";
            $scope.contact.email = "";
            $scope.contact.message = "";
        },function (error) {
            console.log(error);
        });
    };



}]);
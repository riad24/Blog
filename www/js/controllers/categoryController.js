/**
 * Created by riad mahmud on 1/27/2017.
 */

app.controller('categoryController', ['$scope','$state','$stateParams','apiHandler', function ($scope,$state,$stateParams,apiHandler) {

    /**
     * for blog title and slogan
     */
    apiHandler.getTitlenSlogan().then(function (success) {
        $scope.TitleSlogan = success;
        console.log($scope.TitleSlogan);
    });

    /**
     *
     */
    $scope.Posts = $stateParams.catPosts;
    console.log($scope.Posts);

    var id = $stateParams.id;
    console.log(id);


}]);
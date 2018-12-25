/**
 * Created by Riad Mahmud on 5/24/2017.
 */
app.controller('detailsPostController', ['$scope', '$state', '$stateParams', 'apiHandler','singletonVars',
    function ($scope, $state, $stateParams, apiHandler,singletonVars) {


        $scope.searchPost = function (post) {
            console.log(post);
            apiHandler.getsearchpost(post).then(function (success) {
                //  console.log(success)
                singletonVars.setBasicInfo(success);
                console.log(success);
                $state.go('search');
            }, function (error) {
                console.log(error)
            });

        };

        /**
         * get all Post count
         */
        apiHandler.GetPostcount().then(function (success) {
            console.log(success);
            $scope.postCount = success;
        }, function (error) {
            console.log(error)
        });

        /**
         * get all Category count
         */
        apiHandler.GetCategorycount().then(function (success) {
            console.log(success);
            $scope.catCount = success;
        }, function (error) {
            console.log(error)
        });
        

        var id = $stateParams.id;
        console.log(id);
        apiHandler.getdetailsPost(id).then(function (success) {
            $scope.Posts = success;
            console.log( $scope.Posts);
        });
        

    }]);
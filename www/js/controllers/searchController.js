/**
 * Created by Riad Mahmud on 5/18/2017.
 */
app.controller('searchController', ['$scope', '$state', '$stateParams', 'apiHandler','singletonVars',
    function ($scope, $state, $stateParams, apiHandler,singletonVars) {
       
        $scope.searchpost = function (post) {
            console.log(post);
            apiHandler.getsearchpost(post).then(function (success) {
                //  console.log(success)
                singletonVars.setBasicInfo(success);
                $scope.post="";
                $scope.load();
                console.log(success);
            }, function (error) {
                console.log(error)
            });

        };
        /**
         * Search Post load function
         */
        $scope.load = function () {
            $scope.searchPost = singletonVars.getBasicInfo();
            console.log( $scope.searchPost);
        };
        /**
         * Search Post
         */
        $scope.searchPost = singletonVars.getBasicInfo();
        console.log( $scope.searchPost);

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


    }]);
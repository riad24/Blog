/**
 * Created by riad mahmud on 1/27/2017.
 */

app.controller('postController', ['$scope', '$state', '$stateParams', 'apiHandler','singletonVars',
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
         * get all Post
         */
        apiHandler.getPost().then(function (posts) {
            $scope.AllPosts = posts.data;
            console.log($scope.Posts);
        });

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
        console.log("jshcfksdhdjjsd");
        console.log(id);
        apiHandler.getCategoryPost(id).then(function (success) {
            $scope.Posts = success;
            console.log( $scope.Posts);
            });



        /**
         * text truncate
         */
        $scope.text_truncate = function(str, length, ending) {
            if (length == null) {
                length = 100;
            }
            if (ending == null) {
                ending = '...';
            }
            if (str.length > length) {
                return str.substring(0, length - ending.length) + ending;
            } else {
                return str;
            }
        };


    }]);
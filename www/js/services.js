/**
 * Created by riad mahmud on 2/5/2017.
 */
app.factory('apiHandler', ['$q', '$http', function ($q, $http) {

    var post = {


        getsearchpost:function (post) {
            console.log(post);
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.get('http://localhost:8001/searchGet/'+post).then(function (data) {
                deferred.resolve(data.data);
            },function (data) {
                deferred.reject(data)
            });
            return promise;
        },
        /**
         * get post data
         * @returns {Promise}
         */
        getPost : function () {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var url = 'http://localhost:8001/PostGet';
            $http.get(url).then(function (success) {
                deferred.resolve(success);
            },function (error) {
                deferred.reject(error);
            });
            return promise;
        },
        
        getPostLimt : function () {
            var deferred = $q.defer();
            var promise = deferred.promise;
            var url = 'http://localhost:8001/PostGetlimt';
            $http.get(url).then(function (success) {
                deferred.resolve(success);
            },function (error) {
                deferred.reject(error);
            });
            return promise;
        },

        GetCategorycount :function () {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.get('http://localhost:8001/CategoryGetcount').then(function (data) {
                console.log(data.data);
                deferred.resolve(data.data);
            },function (data) {
                deferred.reject(data)
            });
            return promise;
        },
        GetPostcount :function () {
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.get('http://localhost:8001/PostGetcount').then(function (data) {
                console.log(data.data);
                deferred.resolve(data.data);
            },function (data) {
                deferred.reject(data)
            });
            return promise;
        },

        getCategoryPost:function (id) {
            console.log(id);
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.get('http://localhost:8001/categoryPost/'+id).then(function (data) {
                deferred.resolve(data.data);
            },function (data) {
                deferred.reject(data)
            });
            return promise;
        },

        getdetailsPost:function (id) {
            console.log(id);
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.get('http://localhost:8001/detailsPost/'+id).then(function (data) {
                deferred.resolve(data.data);
            },function (data) {
                deferred.reject(data)
            });
            return promise;
        },

        /**
         *  post Contact data
         * @returns {Promise}
         */
        AddPostCont:function (Contact) {
            console.log(Contact);
            var deferred = $q.defer();
            var promise = deferred.promise;
            $http.post('http://localhost:8001/ContactPost',Contact).then(function (data) {
                deferred.resolve(data);
            },function (data) {
                deferred.reject(data)
            });
            return promise;
        }
    };

    return post;
}])



.factory('singletonVars', [function () {
    
    var SearchInfo = {};

    var singleton = {
        setBasicInfo: function (data) {
            SearchInfo = data;
            console.log(SearchInfo)
           
        },
        getBasicInfo: function () {
            return SearchInfo;
        }
     

    };

    return singleton;


}]);

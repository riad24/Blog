app.config(function($stateProvider, $urlRouterProvider) {

 // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/home");

      // Now set up the states
     $stateProvider
     .state('home', {
     url: "/home",
     templateUrl: "template/home.html",
     controller: "homeController"
     })
     .state('search', {
      url: "/search",
      templateUrl: "template/search.html",
      controller: "searchController"
     })
     .state('about', {
     url: "/about",
     templateUrl: "template/about.html",
     controller: "aboutController"
     })
     .state('contact', {
     url: "/contact",
     templateUrl: "template/contact.html",
     controller: "contactController"
     })
     .state('post', {
     url: "/post/",
     templateUrl: "template/post.html",
     controller: "postController"
     })
     .state('categoryPost', {
      url: "/categoryPost/:id",
      templateUrl: "template/categoryPost.html",
      controller: "postController"
     })
     .state('detailsPost', {
      url: "/detailsPost/:id",
      templateUrl: "template/detailsPost.html",
      controller: "detailsPostController"
     })
     
     .state('categories', {
     url: "/categories/:id",
     templateUrl: "template/post.html",
     controller: "categoryController"
       
     })
});
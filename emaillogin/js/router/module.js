
app.config(['$stateProvider','$urlRouterProvider',
         function($stateProvider,$urlRouterProvider){
			 $urlRouterProvider.otherwise("/state1");
         	$stateProvider
         	.state('userlogin',{
				url: "/state1",
				templateUrl: "userlogin1.html",
				controller:"personCtrl"

         	})
			.state('userdtails',{
				url:"/state2",
				templateUrl: "userdetails.html"

				})
         }
	])

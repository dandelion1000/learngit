app.service('getDataService',function($http){

    return{
     getdata: function(){
       return   $http.get("http://localhost:63342/emaillogin/data.json")
        .success(function(response) {
    })
     }
    }
});
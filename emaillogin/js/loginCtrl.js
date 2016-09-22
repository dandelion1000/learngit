var app = angular.module('myApp', ['ui.router','ui.bootstrap']);
app.controller('personCtrl', function($scope,$state,$uibModal) {
    	//alert("登录成功");
    	//console.log("xddff");
    	 $state.go('userlogin');
    $scope.email="enter email";
   $scope.userLogin= function (){
        $state.go('userdtails')
    };
  $scope.userRegister=function(){
      $uibModal.open({
           animation: true,
            templateUrl: 'register.html',
            controller: 'registerCtrl',
             size:'md',
           resolve: {


           }
      }).result.then(function(){

      })
    }

})
.controller('loginCtrl',function($scope){
   // $scope.recordDatas=getData.dataRecords;
    //$scope.totalItemNum=getData.dataRecords.length;
   //console.log($scope.totalItemNum);
})

.controller('registerCtrl',function($scope,$uibModalInstance){
    $scope.cancel = function () {
        $uibModalInstance.dismiss();
    };
})

/*.service('getDataService',function(Restangular){
    var records = Restangular.allUrl('dd','data.json');
    return{
        getRecordsData:function(){
            return  records.get();
        }
    }
})*/
app.controller('PieChartCtrl',function($scope,getDataService){
     console.log("ddf");
    getDataService.getdata().then(function (response) {
        return response;
        console.log(response);
    },function(){
        return console.log("error")
    })
    $scope.data=response.categories;
    console.log($scope.data);

 })
.directive('chartline3',function(){
    return {
        scope: {
            id: "@",
            legend: "=",
            item: "=",
            data: "="
        },
        restrict: 'E',
        template: '<div style="width: 700px; height:550px;"></div>',
        replace: true,
        link: function($scope, element, attrs, controller) {
            var option = {
                title: {
                    text: '数据错误反馈统计'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient : 'vertical',
                    x : 'right',
                    y:'50',
                    data:[$scope.data]
                },
                toolbox: {
                    show : true,
                    feature : {
                        mark : {show: true},
                        dataView : {show: true, readOnly: false},
                        magicType : {
                            show: true,
                            type: ['pie', 'funnel']
                        },
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                calculable : false,
                series : [
                    {
                        name:'访问来源',
                        type:'pie',
                        selectedMode: 'single',
                        radius : [0, 70],

                        // for funnel
                        x: '20%',
                        width: '40%',
                        funnelAlign: 'left',
                        max: 1548,

                        itemStyle : {
                            normal : {
                                label : {
                                    position : 'inner'
                                },
                                labelLine : {
                                    show : false
                                }
                            }
                        },
                        data:[
                            {value:335, name:'直达'},
                            {value:679, name:'营销广告'},
                            {value:1548, name:'搜索引擎', selected:true}
                        ]
                    },
                    {
                        name:'访问来源',
                        type:'pie',
                        radius : [100, 140],

                        // for funnel
                        x: '60%',
                        width: '35%',
                        funnelAlign: 'left',
                        max: 1048,

                        data:[
                            {value:335, name:'直达'},
                            {value:310, name:'邮件营销'},
                            {value:234, name:'联盟广告'},
                            {value:135, name:'视频广告'},
                            {value:1048, name:'百度'},
                            {value:251, name:'谷歌'},
                            {value:147, name:'必应'},
                            {value:102, name:'其他'}
                        ]
                    }
                ]
            };
            var myChart = echarts.init(document.getElementById($scope.id),'macarons');
            myChart.setOption(option);
        }
    };
})

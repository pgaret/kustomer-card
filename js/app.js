angular.module("ContextCard", [])
  .controller('Index', ['$scope', '$rootScope', function($scope, $rootScope){
    moment().format()
    $scope.loaded_orders = false
    $scope.orders = []
    $scope.orderDetails = -1
    $scope.printScope = () => {
      console.log($scope)
    }
    $scope.parseDate = (date) => {
      return moment(moment(date)).format('MM/DD/YY')
    }
    $scope.showOrder = (index) => {
      $scope.orderDetails = index
    }
    $scope.initializeOrders = function(){
      console.log("line item numbers")
      Kustomer.initialize(function(contextJSON) {
        console.log("initialize kustomer")
        console.log(contextJSON)
        var customer_attributes = contextJSON.customer.attributes;
        if (customer_attributes.emails.length) {
          var email = customer_attributes.emails[0].email;
          Kustomer.request({
            url: '/v1/customers/email='+email,
            method: 'get'
          }, function(err, customer){
            console.log(customer)
            Kustomer.request({
              url: '/v1/customers/'+customer.id+"/klasses/order",
              method: 'get'
            },function(err, orders){
              console.log(orders)
              $scope.$apply(()=>{
                $scope.orders = orders
                $scope.loaded_orders = true
              })
            })
          })
        } else {
          // customer has no email addresses - close the card
          Kustomer.close();
        }
      });
    }
  }])

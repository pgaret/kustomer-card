angular.module("ContextCard", [])
  .controller('Index', ['$scope', '$rootScope', function($scope, $rootScope){
    $scope.loaded_orders = false
    $scope.orders = []
    $scope.checkBasics = () => {
      console.log("Check Basics")
    }
    $scope.printScope = () => {
      console.log($scope)
    }
    $scope.initializeOrders = function(){
      console.log("initialize orders")
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

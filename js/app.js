angular.module("ContextCard", [])
  .controller('Index', ['$scope', '$rootScope', function($scope, $rootScope){
    this.loaded_orders = false
    this.initializeOrders = function(){
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
              this.orders = orders
              this.loaded_orders = true
            })
          })
        } else {
          // customer has no email addresses - close the card
          Kustomer.close();
        }
      });
    }
  }])

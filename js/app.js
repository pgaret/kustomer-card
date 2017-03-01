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
      return moment(moment(date)).format('M/D/YY')
    }
    $scope.showOrder = (index) => {
      $scope.orderDetails = index
    }
    $scope.multiplyMoney = (unitPrice, quantity) => {
      let total = accounting.unformat(unitPrice)*quantity
      total = accounting.formatMoney(total,[symbol = "$"],[precision = 2],[thousand = ","],[decimal = "."],[format = "%s%v"])
      return total
    }
    $scope.initializeOrders = function(){
      console.log("keys")
      Kustomer.initialize(function(contextJSON) {
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
              if (orders.length > 0){
                $scope.$apply(()=>{
                  for (let i = 0; i < orders.length; i++){
                    orders[i].lineItemKeys = []
                    for (let j = 0; j < orders[i].attributes.data.lineItems.length; j++){
                      let keys = Object.keys(orders[i].attributes.data.lineItems[j])
                      for (let k = 0; k < keys.length; k++){
                        if (!orders[i].lineItemKeys.includes(keys[k])){
                          orders[i].lineItemKeys.push(keys[k])
                        }
                      }
                    }
                  }
                  $scope.orders = orders
                  $scope.loaded_orders = true
                })
              } else {
                Kustomer.close()
              }
            })
          })
        } else {
          // customer has no email addresses - close the card
          Kustomer.close();
        }
      });
    }
  }])

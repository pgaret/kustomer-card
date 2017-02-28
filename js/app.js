function loadCard(){
  Kustomer.request({
    url: '/v1/conversations',
    method: 'GET',
    body: {"status": "done"}
  }, function(err, conversations){
    console.log("Error: "+err)
    console.log("Conversations: "+conversations)
  })
}

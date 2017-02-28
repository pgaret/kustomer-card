function getConversations(){
  Kustomer.request({
    url: '/v1/conversations',
    method: 'GET',
    body: {"status": "done"},
    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4YjQ4ZTRlYzM1OTE4MTEwMGE0YTE4OCIsInVzZXIiOiI1OGI0OGU0ZDY4NGExMDExMDBhYjFiMzUiLCJvcmciOiI1OGI0OGUyYjUzMDUyZjExMDAxYTk4ZDciLCJvcmdOYW1lIjoienp6LXBlcmVncmluIiwidXNlclR5cGUiOiJtYWNoaW5lIiwicm9sZXMiOlsib3JnLnVzZXIiLCJvcmcuYWRtaW4iXSwiYXVkIjoidXJuOmNvbnN1bWVyIiwiaXNzIjoidXJuOmFwaSIsInN1YiI6IjU4YjQ4ZTRkNjg0YTEwMTEwMGFiMWIzNSJ9.ZwgabjO0svZUXmaSQwom1CdqrTg9157zjs4BUjPP_8g"
  }, function(err, conversations){
    console.log("Error: "+err)
    console.log("Conversations: "+conversations)
  })
}

function getCards(){
  Kustomer.request({
    url: '/v1/cards',
    method: 'GET',
    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4YjQ4ZTRlYzM1OTE4MTEwMGE0YTE4OCIsInVzZXIiOiI1OGI0OGU0ZDY4NGExMDExMDBhYjFiMzUiLCJvcmciOiI1OGI0OGUyYjUzMDUyZjExMDAxYTk4ZDciLCJvcmdOYW1lIjoienp6LXBlcmVncmluIiwidXNlclR5cGUiOiJtYWNoaW5lIiwicm9sZXMiOlsib3JnLnVzZXIiLCJvcmcuYWRtaW4iXSwiYXVkIjoidXJuOmNvbnN1bWVyIiwiaXNzIjoidXJuOmFwaSIsInN1YiI6IjU4YjQ4ZTRkNjg0YTEwMTEwMGFiMWIzNSJ9.ZwgabjO0svZUXmaSQwom1CdqrTg9157zjs4BUjPP_8g"
  }, function(err, cards){
    console.log("Error: "+err)
    console.log("Conversations: "+cards)
  })
}

function postCard(){
  axios({
    method: 'POST',
    url: 'https://api.kustomerapp.com/v1/cards/available',
    header: {authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU4YjQ4ZTRlYzM1OTE4MTEwMGE0YTE4OCIsInVzZXIiOiI1OGI0OGU0ZDY4NGExMDExMDBhYjFiMzUiLCJvcmciOiI1OGI0OGUyYjUzMDUyZjExMDAxYTk4ZDciLCJvcmdOYW1lIjoienp6LXBlcmVncmluIiwidXNlclR5cGUiOiJtYWNoaW5lIiwicm9sZXMiOlsib3JnLnVzZXIiLCJvcmcuYWRtaW4iXSwiYXVkIjoidXJuOmNvbnN1bWVyIiwiaXNzIjoidXJuOmFwaSIsInN1YiI6IjU4YjQ4ZTRkNjg0YTEwMTEwMGFiMWIzNSJ9.ZwgabjO0svZUXmaSQwom1CdqrTg9157zjs4BUjPP_8g', accept: 'application/json', 'content-type': 'application/json'},
    data: {"name":"More data","description":"Keep it coming","url":"https://pgaret.github.io/kustomer-card/index.html","contexts":["conversation", "customer", "kobject"]}
  }).then(result=>{
    debugger
  })
}

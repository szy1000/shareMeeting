let express = require('express');

let app = express()


app.get('/api/getUser', function (req, res) {
  // res.setHeader('Access-Control-Allow-Methods', 'PUT')
  res.setHeader('Access-Control-Allow-Origin', '*')
  let {wd, callback} = req.query;
  console.log(req)
  console.log(callback)
  console.log(wd)
  let obj = {
    name: wd,
    age: 18,
  }
  res.end(JSON.stringify(obj))
})


app.get('/api/userInfo', function (req, res) {
  let {wd, callback} = req.query;
  console.log(req)
  console.log(callback)
  console.log(wd)
  res.end(`${callback}('wwwww')`)
})


app.listen(3000)

let express = require('express');
let app = express()
app.get('/api/getUserInfo', function (req, res) {
  // todo 1
  // res.setHeader('Access-Control-Allow-Origin', '*')
  // todo 2
  let {wd, callback} = req.query;
  const userInfo = {
    name: 'shenzhiyong',
    age: 18,
    avatar: 'https://pic3.zhimg.com/v2-08d2d2262a25abcc98a44af38b0aac26_xs.jpg'
  }
  if(callback) {
    res.end(`${callback}(${JSON.stringify(userInfo)})`)
  } else {
    res.end(JSON.stringify(userInfo))
  }
})

app.listen(3000)

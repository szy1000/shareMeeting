// todo 5
let express = require('express');
let app = express();
let WebSocket = require('ws');//记得安装ws
let wss = new WebSocket.Server({port:3000});
wss.on('connection',function(ws) {
  ws.on('message', function (data) {
    console.log(data);
    const info = {
      name: 'shenzhiyong',
      age: 18,
      avatar: 'https://pic3.zhimg.com/v2-08d2d2262a25abcc98a44af38b0aac26_xs.jpg'
    }
    ws.send(JSON.stringify(info))
  });
})

const express = require('express')
const app = express()

// app 中有很多方法，其中 get，post，put/patch，delete，
// 参数是router 路径，第二个参数是一个函数，函数会接收req和res两个参数，他们分别是request和response
// request 包含了浏览器的各种信息，比如 query body headers
// res 对象一般不会取信息，一般都是向浏览器输出信息，比如header 或者输出内容
app.get('/', function (req, res) {
  res.send('Hello, world')
})

// 不解释，算了 解释下，监听3000端口，然后函数返回结果
app.listen(3000, function () {
  console.log('listening on port 3000')
})

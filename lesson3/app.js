const express = require('express')
const superagent = require('superagent')
const cheerio = require('cheerio')

const app = express()

app.get('/', function (req, res) {
  superagent.get('https://cnodejs.org/').end(function (err, sres) {
    if (err) {
      return next(err)
    }
    // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
    // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
    // 剩下就都是 jquery 的内容了
    var $ = cheerio.load(sres.text)
    var items = []
    $('#topic_list .topic_title').each(function (idx, element) {
      var $element = $(element)
      items.push({
        title: $element.attr('title'),
        href: $element.attr('href'),
      })
    })

    res.send(items)
  })
})

app.listen(3000, function () {
  console.log('listening on port 3000')
})

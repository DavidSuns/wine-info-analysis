var express = require('express');


var app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
  // superagent.get('http://www.wineyun.com/')
  //   .end(function (err, res) {
  //     if (err) {
  //       return next(err);
  //     }
  //
  //     var $ = cheerio.load(res.text);
  //     var items = [];
  //     $('#topic_list .topic_title').each(function (idx, element) {
  //       var $element = $(element);
  //       items.push({
  //         title: $element.attr('title'),
  //         href: $element.attr('href')
  //       });
  //     });
  //
  //     res.send(items);
  //   });
  res.send("express start");
});

app.listen(app.get('port'));

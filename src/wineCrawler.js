var cheerio = require('cheerio');
var agent = require('superagent');
var async = require('async');

var wineYun = {

};

wineYun.getSeeds = function(url) {
  agent.get(url).end(function(err, res) {
    if(error) {
      return console.error(error);
    }

    var $ = cheerio.load(res.text);

    $('a[href*="group/"]').each(function() {
      var me = $(this);
      var href = me.attr('href');
      fetchItemURLs(href);
    })

  });
};

wineYun.fetchItemURLs = function(url){
    agent.get(url).end(function(err, res) {
      if (error) {
          return console.error(error);
      }
      console.log('成功爬取到页面： ' + url );
      var $ = cheerio.load(res.text);
    });
};

// wineYun.parseWines = function() {
//   agent.get('http://www.wineyun.com/')
//     .end(function (err, res) {
//       if (err) {
//         return next(err);
//       }
//
//       var $ = cheerio.load(res.text);
//       var items = [];
//       $('#topic_list .topic_title').each(function (idx, element) {
//         var $element = $(element);
//         items.push({
//           title: $element.attr('title'),
//           href: $element.attr('href')
//         });
//       });
//     });
// };

module.exports = wineYun;

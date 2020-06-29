var express = require('express')
var router = express.Router()
var config = require('./config.js')
var url = require('url')
var homehot = require('./data/home/hotdata')
var searchData = require('./data/search')
var detailData = require("./data/detail");
var commentData = require("./data/comment");



router.get(config.homehot1,function(req,res){
  res.send(homehot.hot1)
})

router.get(config.homehot2, function (req, res) {
  
  res.send(homehot.hot2);
});

// 搜索接口

router.get('/search',(req,res)=>{
  // 接收参数：city, searchcontent
  var cityName = url.parse(req.url,true).query.city
  var SearchContent = url.parse(req.url, true).query.content;
  console.log("城市：" + cityName, "搜索内容：" + SearchContent);
  
  res.send(searchData);
})

// 详情接口

router.get('/detail',(req,res)=>{
  // 接收商品id
  var id = url.parse(req.url,true).query.id
  
  console.log('商品id:'+ id);
  
  res.send(detailData);
})

// 评价接口
router.get('/comment',(req,res)=>{
  // 接收商品id
  var id = url.parse(req.url,true).query.id
  
  console.log('商品id:'+ id);
  
  res.send(commentData);
})

module.exports = router
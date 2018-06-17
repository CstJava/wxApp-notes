// pages/api/interface/selectorQuery/selectorQuery.js
var query = null;
Page({

  onLoad:function(e){
    query = wx.createSelectorQuery();
  },
  /**
   * 页面的初始数据
   */
  data: {
    textId:'textId',
    textClass:'textClass'
  },
  boundingClientRect:function(e){
    query.select('#testId').boundingClientRect(function (rect) {
      console.log(rect.id);
      console.log(rect.dataset);
      console.log(rect.left);
      console.log(rect.right);
      console.log(rect.top);
      console.log(rect.bottom);
      console.log(rect.width);
      console.log(rect.height);
    }).exec()
  },
  boundingClientRectAll:function(e){
    query.selectAll('.testClass').boundingClientRect(function(rect){
      rect.forEach(function(rect){
        console.log(rect.id);
        console.log(rect.dataset);
        console.log(rect.left);
        console.log(rect.right);
        console.log(rect.top);
        console.log(rect.bottom);
        console.log(rect.width);
        console.log(rect.height);
      })
    }).exec()
  }

})
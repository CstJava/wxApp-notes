// pages/zujian/view/movable-view/movable-view.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x:0,
    y:0
  },
  move:function(e){
    console.log(e)
  },
  scale:function(e){
    console.log(e)
  },
  moveXY:function(e){
    this.setData({
      x:30,
      y:30
    })
  }
 
})
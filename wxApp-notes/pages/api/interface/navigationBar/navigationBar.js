// pages/api/interface/navigationBar/navigationBar.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  setNavigationBarTitle:function(e){
    wx.setNavigationBarTitle({
      title: '当前页面标题'
    })
  },
  setNavigationBarColor:function(e){
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#ff0000',
      animation: {
        duration:400,
        timingFunc:'easeInOut'
      }
    })
  }
})
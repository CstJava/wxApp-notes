// pages/api/device/wifi/wifi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  //初始化wifi模块
  startWifi:function(e){
    wx.startWifi({
      success: function(res) {
        console.log('初始化wifi模块成功')
      }
    })
  },
  //关闭wifi模块
  stopWifi:function(e){
    wx.stopWifi({
      success: function(res) {
        console.log('关闭wifi模块成功')
      }
    })
  }
})
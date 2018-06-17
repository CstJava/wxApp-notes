// pages/api/device/screenBrightness/screenBrightness.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  setScreenBrightness:function(e){
    wx.setScreenBrightness({
      value: e.detail.value,
      success: function(res) {
        console.log('设置亮度成功')
      }
    })
  },
  getScreenBrightness:function(e){
    wx.getScreenBrightness({
      success: function(res) {
        console.log('屏幕亮度:'+res.value)
      }
    })
  },
  setKeepScreenOn:function(e){
    wx.setKeepScreenOn({
      keepScreenOn: true,
      success: function(res) {
        console.log('设置屏幕常量成功')
      }
    })
  }
})
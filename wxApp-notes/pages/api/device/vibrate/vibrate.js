// pages/api/device/vibrate/vibrate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  vibrateLong:function(e){
    wx.vibrateLong({
      success: function(res) {
        console.log('调用长时间振动')
      }
    })
  },
  vibrateShort: function (e) {
    wx.vibrateShort({
      success: function (res) {
        console.log('调用长时间振动')
      }
    })
  }
})
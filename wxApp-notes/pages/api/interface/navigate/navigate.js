// pages/api/interface/navigate/navigate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  navigateTo:function(e){
    wx.navigateTo({
      //不能跳转到tabBar中的页面
      // url: '../../../index/index',
      url:'../feedback/feedback',
      success: function(res) {
        console.log('跳转成功')
      },
      fail: function(res) {
        console.log('跳转失败')
      },
      complete: function(res) {},
    })
  },
  redirectTo:function(e){
    //不能跳转到tabBar中的页面
    wx.redirectTo({
      url: '../feedback/feedback',
      success: function(res) {
        console.log('跳转成功')
      },
      fail: function(res) {
        console.log('跳转失败')
      },
      complete: function(res) {},
    })
  },
  reLaunch:function(e){
    wx.reLaunch({
      //可以跳转到tabBar中的页面,但不能带参数
      url: '../../../index/index',
      success: function (res) {
        console.log('跳转成功')
      },
      fail: function (res) {
        console.log('跳转失败')
      },
      complete: function(res) {},
    })
  },
  switchTab:function(e){
    wx.switchTab({
      //只能跳转到tarBar中的页面,但不能带参数
      url: '../../../index/index',
      success: function (res) {
        console.log('跳转成功')
      },
      fail: function (res) {
        console.log('跳转失败')
      },
      complete: function(res) {},
    })
  },
  navigateBack:function(e){
    wx.navigateBack({
      //返回的页面数，如果大于现有页面数，则返回首页
      delta: 1,
    })
  }
})
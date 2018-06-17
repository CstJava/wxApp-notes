// pages/api/openInterface/payment/payment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  requestPayment:function(e){
    wx.requestPayment({
      timeStamp: '',
      nonceStr: '',
      package: '',
      signType: 'MD5',
      paySign: '',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
  
})
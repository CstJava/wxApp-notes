// pages/api/media/record/record.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recordSrc:''
  },
  startRecord:function(){
    var that = this;
    wx.startRecord({
      success: function(res) {
        var tempFilePath = res.tempFilePath
        that.setData({
          recordSrc: tempFilePath
        })
        wx.playVoice({
          filePath: tempFilePath,
          complete: function () {
          }
        })
      },
      fail: function(res) {
        console.log('录音失败')
      },
      complete: function(res) {},
    })
  },
  stopRecord:function(){
    wx.stopRecord();
  },
  playVoive: function () {
    wx.playVoice({
      filePath: this.data.recordSrc,
      duration: 0,
      success: function (res) {},
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  pauseVoive:function(){
    wx.pauseVoice()
  },
  stopVoice:function(){
    wx.stopVoice()
  }
})
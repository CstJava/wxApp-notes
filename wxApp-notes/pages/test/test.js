// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  test:function(e){
    wx.downloadFile({
      url:'',
      success:function(res){
        wx.playVoice({
          filePath: 'res.tempFilePath',
        })
      }
    })
  }
})
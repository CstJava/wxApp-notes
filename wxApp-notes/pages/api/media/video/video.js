// pages/api/media/video/video.js
Page({

  onReady:function(res){
    this.videoContext = wx.createVideoContext('myVideo')
  },
  inputValue:'',
  /**
   * 页面的初始数据
   */
  data: {
    videoSrc:""
  },
  bindInputBlur:function(e){
    this.inputValue= e.detail.value
  },
  bindSendDanmu:function(){
    this.videoContext.sendDanmu({
      text:this.inputValue,
      color:'#fff'
    })
  },
  chooseVideo:function(){
    var that = this;
    wx.chooseVideo({
      sourceType: [],
      compressed: '',
      maxDuration: 0,
      success: function(res) {
        that.setData({
          videoSrc:res.tempFilePath
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  toggleVideo:function(){
    this.videoContext.pause()
  }
 
})
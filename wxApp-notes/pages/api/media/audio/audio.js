// pages/api/media/audio/audio.js
Page({

  /**
   * 页面的初始数据
   */
  onReady:function(e){
    //使用wx.createAudioContext获取audio上下文context
    this.audioCtx = wx.createInnerAudioContext('myAudio')
    this.audioCtx.src='http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46';
    this.audioCtx.play();
    var that =this;
    setInterval(function(){
      that.setData({
        time: parseInt(that.audioCtx.currentTime)
      })
    },1000)
  },
  data: {
    src:'',
    time:''
  },
  audioPlay:function(){
    this.audioCtx.play()
  },
  audioPause:function(){
    this.audioCtx.pause()
  },
  audioTime:function(){
    //设置音乐指定位置时间
    this.audioCtx.seek(10)
  },
  audioStart:function(){
    this.audioCtx.seek(0)
  }
})
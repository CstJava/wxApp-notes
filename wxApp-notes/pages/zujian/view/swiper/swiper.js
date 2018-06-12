// pages/zujian/view/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:["red","yellow","blue","green"],
    indicatorDots:false,
    autoplay:false,
    interval:5000,
    duration:1000
  },
  changeIndicatorDots:function(e){
    this.setData({
      indicatorDots:!this.data.indicatorDots
    })
  },
  changeAutoplay:function(e){
    this.setData({
      autoplay:!this.data.autoplay
    })
  },
  intervalChange:function(e){
    this.setData({
      interval:e.detail.value
    })
  },
  durationChange:function(e){
    this.setData({
      duration:e.detail.value
    })
  }

})
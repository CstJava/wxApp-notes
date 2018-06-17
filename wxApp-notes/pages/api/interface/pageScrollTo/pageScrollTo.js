// pages/api/interface/pageScrollTo/pageScrollTo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  pageScrollToBottom:function(e){
    wx.pageScrollTo({
      scrollTop:500,
      duration: 500,
    })
  },
  pageScrollToTop: function (e) {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 500,
    })
  }
})
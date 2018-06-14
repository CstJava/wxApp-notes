// pages/api/socket/socket.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  request:function(){
    wx.request({
      url: '',
      data:{
        x:1,
        y:2
      },
      header:{
        'content-type':'application/json'
      },
      success:function(res){
        console.log(res.data);
      }
    })
  },
  uploadFile: function () {
    wx.uploadFile({
      url: '',
      filePath: '',
      name: '',
      header: {},
      formData: {},
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  downloadFile:function(){
    wx.downloadFile({
      url: '',
      header: {},
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  connectSocket:function(){
    wx.connectSocket({
      url: '',
      header: {},
      method: '',
      protocols: [],
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  sendSocketMessage:function(){
    wx.sendSocketMessage({
      data: [],
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onSocketMessage:function(){
    wx.onSocketMessage(function(res){
      
    })
  },
  closeSocket:function(){
    wx.closeSocket({
      code: 0,
      reason: '',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }

})
//监听WebSocket打开
wx.onSocketOpen(function(res){
  console.log('WebSocket连接已打开')
})
//监听WebSocket错误
wx.onSocketError(function(res){
  console.log('WebSocket连接打开失败，请检查！')
})
//监听WebSocket关闭
wx.onSocketClose(function(res){
  console.log('WebSocket 已关闭！')
})
//index.js
//获取应用实例
const app = getApp()

//调用base.js方法
var base = require('../base.js');
base.baseTest();  //base.js test();

Page({
  data: {
    socket:false,
    media:false,
    file:false,
    storage:false,
    test:"text",   
    socketUrl: [
      { name: 'socket', url: '../api/socket/socket' }
    ],

    mediaUrl:[
      { name: 'image', url: '../api/media/image/image' },
      { name: 'record', url: '../api/media/record/record' },
      { name: 'audio', url: '../api/media/audio/audio' },
      { name: 'video', url: '../api/media/video/video' }
    ],

    fileUrl:[
      { name: 'file', url: '../api/file/file' },
    ],

    storageUrl: [
      { name: 'storage', url: '../api/storage/storage' }
    ],

    locationUrl: [
      { name: 'location', url: '../api/location/location' }
    ]

  },
  onLoad:function(){
    console.log("onLoad生命周期函数，只执行一次")
  },
  onReady:function(){
    console.log("onReady生命周期函数，只执行一次")
  },
  onShow:function(){
    console.log("onShow生命周期函数")
  },
  onHide:function(){
    console.log("onHide生命周期函数")
  },
  onUnload:function(){
    console.log("onUnload生命周期函数")
  },
  //页面相关事件处理函数————监听用户下拉动作
  //可以用此函数监听用户下拉刷新事件
  //需要在app.json的window配置中开启enablePullDownRefreah选项
  //当处理完数据刷新事件，可以用wx.stopPullDownRefresh()函数停止页面下拉刷新
  onPullDownRefresh:function(){
    console.log("onPullDownRefresh函数");
    // wx.stopPullDownRefresh();
  },
  //页面上拉触底事件的处理函数
  onReachBottom:function(){
    console.log("onReachBottom函数")
  },
  test:function(e){
    //直接修改this.data值的方法是无效的，不但不能改变页面的状态，还会造成数据不一致
    // this.test="new text";
    //修改数据的正确方式
    this.setData({
      test:"new text"
    }),
    console.log(e)
  },
  //开发者可以添加任意的函数或数据到object参数中，在页面的函数中用this可以访问
  socket: function () {
    this.setData({
      socket: !this.data.socket
    })
  },
  media: function () {
    this.setData({
      media: !this.data.media
    })
  },
  file: function () {
    this.setData({
      file: !this.data.file
    })
  },
  storage: function () {
    this.setData({
      storage: !this.data.storage
    })
  },
  location: function () {
    this.setData({
      location: !this.data.location
    })
  },
})

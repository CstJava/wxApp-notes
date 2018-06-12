//index.js
//获取应用实例
const app = getApp()

//调用base.js方法
var base = require('../base.js');
base.baseTest();  //base.js test();

Page({
  data: {
    view: false,
    form:false,
    media:false,
    test:"text",
    viewUrl: [
      { name:'view',url:'../zujian/view/view/view'},
      { name: 'scroll-view', url: '../zujian/view/scroll-view/scroll-view' },
      { name: 'swiper', url: '../zujian/view/swiper/swiper' },
      { name: 'movable-view', url: '../zujian/view/movable-view/movable-view' },
      ],
    formUrl: [
      { name: 'checkbox', url: '../zujian/form/checkbox/checkbox' },
      { name: 'picker', url: '../zujian/form/picker/picker' },
      { name: 'radio', url: '../zujian/form/picker/picker' }
    ],
    mediaUrl: [
      { name: 'camera', url: '../zujian/media/camera/camera' },
      
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
    wx.stopPullDownRefresh();
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
  view: function () {
    this.setData({
      view:!this.data.view
    })
  },
  form: function () {
    this.setData({
      form: !this.data.form
    })
  },
  media: function () {
    this.setData({
      media: !this.data.media
    })
  }
})

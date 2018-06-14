// pages/zujian/zujian.js
//获取应用实例
const app = getApp()

Page({
  data: {
    view: false,
    form: false,
    media: false,
    viewUrl: [
      { name: 'view', url: 'view/view/view' },
      { name: 'scroll-view', url: 'view/scroll-view/scroll-view' },
      { name: 'swiper', url: 'view/swiper/swiper' },
      { name: 'movable-view', url: 'view/movable-view/movable-view' },
    ],
    formUrl: [
      { name: 'checkbox', url: 'form/checkbox/checkbox' },
      { name: 'picker', url: 'form/picker/picker' },
      { name: 'radio', url: 'form/picker/picker' }
    ],
    mediaUrl: [
      { name: 'camera', url: 'media/camera/camera' },

    ]

  },
  //开发者可以添加任意的函数或数据到object参数中，在页面的函数中用this可以访问
  view: function () {
    this.setData({
      view: !this.data.view
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
  },

})

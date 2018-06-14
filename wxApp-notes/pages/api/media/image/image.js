// pages/api/media/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageSrc:""
  },

  chooseImage:function(){
    var that = this;
    wx.chooseImage({
      count: 9,
      //图片格式，original原图，compressed压缩图，默认二者都有
      sizeType: [],
      //获取方式，album从相册选图，camera使用相机，默认二者都有
      sourceType: [],
      success: function(res) {
        //返回选定照片的本地文件路径列表，可作为img标签的src属性
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          imageSrc: tempFilePaths
        }),
        //获取图片信息
        wx.getImageInfo({
          src: res.tempFilePaths[0],
          success:function(res){
            console.log("width:"+res.width+",height:"+res.height);
            console.log(res.path);
          }
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  previewImage:function(){
    wx.previewImage({
      //当前显示图片的http链接
      // current: this.data.imageSrc,
      //需要预览的图片的http链接列表
      urls: this.data.imageSrc,
      success: function(res) {},
      fail: function(res) {
        console.log("没有加载图片")
      },
      complete: function(res) {},
    })
  },
  savaImage:function(){
    wx.saveImageToPhotosAlbum({
      filePath: this.data.imageSrc,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})
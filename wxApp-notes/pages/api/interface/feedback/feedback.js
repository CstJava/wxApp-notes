// pages/api/interface/feedback/feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:['A','B','C']
  },
  showToast:function(e){
    wx.showToast({
      title: '提示框标题',
      //默认图标success
      icon: 'none',
      //自定义图片的本地路径，优先级高于icon
      image: '',
      //默认1500  
      duration: 1500,
      //是否显示透明蒙层，防止触摸穿透，默认：false
      mask: true,
      success: function(res) {}
    })
  },
  //需要调用wx.hideLoading才能关闭提示框
  showLoading:function(e){
    wx.showLoading({
      title: 'loading提示框',
      mask: false,
      success: function(res) {}
    })
  },
  hideLoading:function(e){
    wx.hideLoading();
  },

  showModal:function(e){
    wx.showModal({
      title: '模态弹窗标题',
      content: '模态弹窗内容content',
      //是否显示取消按钮，默认true
      showCancel: true,
      //取消按钮的文字，默认'取消'
      cancelText: '取消',
      cancelColor: '',
      //确认按钮的文字，默认'确定'
      confirmText: '确定',
      confirmColor: '',
      //confirm为true，表示用户点击了确认按钮
      //cancel为true，表示用户点击了取消按钮
      success: function(res) {
        if(res.confirm)
          console.log('用户点击确认')
        else
          console.log('用户点击取消')
      }
    })
  },
  showActionSheet:function(e){
    var that = this;
    wx.showActionSheet({
      itemList:this.data.items,
      itemColor: '',
      success: function(res) {
        console.log(that.data.items[res.tapIndex])
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})
// pages/api/device/device.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNum:''
  },
  //获取系统信息
  getSystemInfo:function(e){
    wx.getSystemInfo({
      success: function(res) {
        console.log('手机品牌:' + res.brand);
        console.log('手机型号:' + res.model);
        console.log('设备像素比:' + res.pixelRatio);
        console.log('屏幕宽度:' + res.windowWidth);
        console.log('屏幕高度:' + res.windowHeight);
        console.log('状态栏高度:' + res.statusBarHeight);
        console.log('微信设置的语言:' + res.language);
        console.log('微信版本号:' + res.version);
        console.log('操作系统:' + res.system);
        console.log('客户端平台:' + res.platform);
        console.log('用户字体大小设置:' + res.fontSizeSetting);
        console.log('客户端基础库版本:' + res.SDKVersion);
      }
    })
  },
  //获取网络类型
  getNetworkType:function(e){
    wx.getNetworkType({
      success: function(res) {
        console.log('网络类型:'+res.networkType)
      }
    })
  },
  //拨打电话
  phoneNum:function(e){
    this.setData({
      phoneNum:e.detail.value
    })
  },
  makePhoneCall:function(e){
    wx.makePhoneCall({
      phoneNumber: this.data.phoneNum,
      success: function(res) {
        console.log('拨打成功')
      },
      fail: function(res) {
        console.log('拨打失败')
      },
      complete: function(res) {},
    })
  },
  scanCode:function(e){
    wx.scanCode({
      //是否只能从相机扫码
      onlyFromCamera: true,
      scanType: [],
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {
        console.log('扫码失败')
      }
    })
  }
})

//监听网络状态
wx.onNetworkStatusChange(function (res) {
  if(!res.isConnected)
  wx.showLoading({
    title: '网络连接已断开',
  })
  else
  wx.showToast({
    icon:'none',
    title: '已切换到'+res.networkType,
    success:function(res){
      wx.hideLoading()
    }
  })
  console.log('是否有网络连接' + res.isConnected);
  console.log('网络类型' + res.networkType);
})

//监听用户截屏事件
wx.onUserCaptureScreen(function(res){
  console.log('用户截屏了')
})
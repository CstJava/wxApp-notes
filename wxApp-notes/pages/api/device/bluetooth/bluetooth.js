// pages/api/device/bluetooth/bluetooth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  //初始化小程序蓝牙模块
  openBluetoothAdapter:function(e){
    wx.openBluetoothAdapter({
      success: function(res) {
        wx.showToast({
          title: '初始化蓝牙模块'
        })
      }
    })
  },
  //关闭蓝牙模块
  closeBluetoothAdapter:function(e){
    wx.closeBluetoothAdapter({
      success: function(res) {
        wx.showToast({
          title: '关闭蓝牙模块'
        })
      }
    })
  },
  //获取本机蓝牙适配器状态
  getBluetoothAdapterState:function(e){
    wx.getBluetoothAdapterState({
      success: function(res) {
        wx.showToast({
          title: '是否正在搜索设备'+res.discovering+
          ',蓝牙适配器是否可用'+res.available
        })
      }
    })
  },

})

//监听蓝牙适配器状态变化事件
wx.onBluetoothAdapterStateChange(function(res){
  wx.showToast({
    title: '是否正在搜索设备' + res.discovering +
    ',蓝牙适配器是否可用' + res.available
  })
})
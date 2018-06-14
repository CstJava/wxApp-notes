// pages/api/location/location.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  //获取当前的地理位置、速度
  getLocation:function(e){
    wx.getLocation({
      type: '',
      //获取高度信息，由于获取高度需要较高精确度，会减慢接口返回速度
      altitude: true,
      success: function(res) {
        //纬度，浮点数，范围为-90~90，负数表示南纬
        console.log('纬度:' +res.latitude)
        //经度，浮点数，范围为-180~180，负数表示西经
        console.log('经度:' +res.longitude)
        //速度，浮点数，单位m/s
        console.log('速度:' +res.speed)
        //位置的精确度
        console.log('位置的精确度:' +res.accuracy)
        //高度，单位 m
        console.log('高度:' +res.altitude)
        //垂直精度，单位 m（Android 无法获取，返回 0）
        console.log('垂直精度:' +res.verticalAccuracy)
        //水平精度，单位 m
        console.log('水平精度:' +res.horizontalAccuracy)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  //打开地图选择位置
  chooseLocation:function(e){
    wx.chooseLocation({
      success: function(res) {
        console.log('位置名称:'+res.name)
        console.log('详细地址:' + res.address)
        console.log('纬度:' + res.latitude)
        console.log('经度:' + res.longitude)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  
  //打开地图查看位置
  openLocation:function(e){
    wx.getLocation({
      type: '',
      altitude: true,
      success: function(res) {
        wx.openLocation({
          latitude: res.latitude,
          longitude: res.longitude,
          success: function(res) {
            console.log('查看位置成功')
          },
          fail: function(res) {},
          complete: function(res) {},
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})
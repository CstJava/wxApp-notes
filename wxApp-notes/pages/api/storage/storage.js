// pages/api/storage/storage.js

//本地数据存储的大小限制为 10MB
Page({

  /**
   * 异步加载缓存数据渲染页面
   */
  onLoad:function(e){
    var that = this;
    wx.getStorage({
      key: 'name',
      success: function(res) {
        that.setData({
          name:res.data
        })
      }
    });
    wx.getStorage({
      key: 'sex',
      success: function (res) {
        if(res.data=='女'){
          var WOMAN = true;
        }
        that.setData({
          sex: [{ name: '男', checked: true },
            { name: '女', checked: WOMAN }]
        });
      }
    });
    wx.getStorage({
      key: 'email',
      success: function (res) {
        that.setData({
          email: res.data
        })
      }
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    sex:'',
    email:'',
  },
  /**
   * 异步缓存数据
   */
  setStorage:function(e){
    var that = this;
    wx.setStorage({
        key: 'name',
        data: e.detail.value.name,
        success: function (res) {
          console.log('缓存数据name'+that.data.name+'成功')
        }
      })
    wx.setStorage({
      key: 'sex',
      data: e.detail.value.sex,
      success: function (res) {
        console.log('缓存数据sex' + e.detail.value.sex +'成功')
      },
    })
  },
  /**
   * 同步缓存数据
   */
  setStorageSync:function(e){
    try{
      wx.setStorageSync("email", e.detail.value.email);
      console.log('缓存数据email' + e.detail.value.email + '成功');      
    }catch(e){
      console.log('缓存数据email失败')
    }
  }
  ,getStorage:function(e){
    wx.getStorage({
      key: 'name',
      success: function(res) {
        console.log(res)
      }
    }),
    wx.getStorage({
      key: 'sex',
      success: function (res) {
        console.log(res)
      }
    }),
    wx.getStorage({
      key: 'email',
      success: function (res) {
        console.log(res)
      }
    })
  },
  /**
   * 异步获取本地缓存Storage相关信息
   */
  getStorageInfo:function(e){
    wx.getStorageInfo({
      success: function(res) {
        console.log(res.keys);
        console.log(res.currentSize)
        console.log(res.limitSize)
      }
    })
  },
  /**
   * 本地缓存中异步删除指定key
   */
  removeStorage:function(e){
    wx.removeStorage({
      key: e.detail.value.removeKey,
      success: function(res) {
        console.log('删除缓存' + e.detail.value.removeKey+'成功')
      }
    })
  },
  clearStorage:function(e){
    try{
      wx.clearStorage();  
      console.log('清理缓存成功')
    }catch(e){
      console.log('清理缓存失败')
    }
  }
  
})
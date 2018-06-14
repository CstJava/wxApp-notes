// pages/api/file/file.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  chooseImage:function(){
    wx.chooseImage({
      count: 1,
      success: function(res) {
        var tempFilePaths = res.tempFilePaths;
        wx.saveFile({
          tempFilePath: tempFilePaths[0],
          success: function(res) {
            var savadFilePath = res.savedFilePath
            wx.getFileInfo({
              filePath: savadFilePath,
              success: function(res) {
                console.log(res.size)
                console.log(res.digest)
              },

            })
          },
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  getSavedFileList:function(){
    wx.getSavedFileList({
      success: function(res) {
        console.log(res.fileList)
        for(var index in res.fileList){
          wx.getSavedFileInfo({
            filePath: res.fileList[index].filePath,
            success: function(res) {
              console.log(res.size)
              console.log(res.createTime)
            }
          })
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  removeSavedFile:function(){
    wx.getSavedFileList({
      success:function(res){
        for (var index in res.fileList){
          wx.removeSavedFile({
            filePath: res.fileList[index].filePath,
            success: function (res) {
              console.log('删除成功')
            },
            fail: function (res) { },
            complete: function (res) { },
          })
        }
      }
    }) 
  },
  openDocument:function(){
    wx.downloadFile({
      url: 'http://example.com/somefile.pdf',
      header: {},
      success: function(res) {
        console.log('文档下载成功'+res.tempFilePath);
        var filePath = res.tempFilePath;
        wx.saveFile({
          tempFilePath: filePath,
          success:function(res){
            wx.openDocument({
              filePath: res.savedFilePath,
              success: function (res){
                wx.showToast({
                  title: '打开文档成功',
                })
              },
              fail:function(err){
                console.log(filePath)
              }
            })            
          }
        })
      },
      fail: function(res) {
        console.log('文档下载失败')
      },
    })
  }
 
})
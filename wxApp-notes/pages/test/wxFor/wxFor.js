// pages/test/wxFor/wxFor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },

  test: function () {
    try {
      this.data.array.length--;
    } catch (e) { }
    this.setData({
      array: this.data.array
    })
  }
})
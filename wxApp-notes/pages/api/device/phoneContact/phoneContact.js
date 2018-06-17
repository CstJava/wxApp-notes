// pages/api/device/phoneContact/phoneContact.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  addPhoneContact:function(e){
    wx.addPhoneContact({
      photoFilePath: '',
      nickName:e.detail.value.nickName,
      lastName: e.detail.value.lastName,
      middleName: e.detail.value.middleName,
      firstName: e.detail.value.firstName,
      remark: e.detail.value.remark,
      mobilePhoneNumber: e.detail.value.mobilePhoneNumber,
      weChatNumber: e.detail.value.weChatNumber,
      addressCountry: '',
      addressState: '',
      addressCity: '',
      addressStreet: '',
      addressPostalCode: '',
      organization: '',
      title: '',
      workFaxNumber: '',
      workPhoneNumber: '',
      hostNumber: '',
      email: '',
      url: '',
      workAddressCountry: '',
      workAddressState: '',
      workAddressCity: '',
      workAddressStreet: '',
      workAddressPostalCode: '',
      homeFaxNumber: '',
      homePhoneNumber: '',
      homeAddressCountry: '',
      homeAddressState: '',
      homeAddressCity: '',
      homeAddressStreet: '',
      homeAddressPostalCode: '',
      success: function(res) {
        console.log('添加成功')
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})
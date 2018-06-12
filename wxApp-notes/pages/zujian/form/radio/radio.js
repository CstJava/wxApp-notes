// pages/zujian/form/radio/radio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items:[
      {name:'USA',value:'美国'},
      {name:'CHN',value:'中国',checked:'true'},
      { name: 'JPN', value: '日本' },
      { name: 'BRA', value: '巴西' }
    ]
  },
  radioChange:function(e){
    console.log('radio发生change事件,携带value值为:'+e.detail.value)
  }
 
})
//index.js
//获取应用实例
const app = getApp()

Page({
 onLoad() {

   wx.request({
     url: 'https://test-miniprogram.com/api/weather/now', //仅为示例，并非真实的接口地址
     data: {
       city: '上海市'
     },
     header: {
       'content-type': 'application/json' // 默认值
     },
     success: function (res) {
       console.log(res.data)
     }
   });
  }
})

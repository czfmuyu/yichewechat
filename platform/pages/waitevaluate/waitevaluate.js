var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopPhon:""
  },
  onLoad: function () {
    var that = this;
    wx.getStorage({
      key: 'id',
      success: function (res) {
        var id = res.data;
        wx.getLocation({
          success: function (res) {
            app.request({
              url: app.globalData.testUrl + '/order/wxOrderDetails',
              method: 'post',
              data: {
                orderId: id,
                lng: res.longitude,
                lat: res.latitude
              },
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              success: function (msg) {
                var data = msg.data.data;
                 console.log(msg);
                that.setData({
                  personName: data.userMsg.user_name,
                  phoneNumber: data.userMsg.mobile,
                  shopsName: data.merchantMsg.merchant_name,
                  shopsPlace: data.merchantMsg.address,
                  shopsDistance: data.distance2,
                  shopLogo: data.merchantMsg.merchant_img,
                  shopPhon: data.merchantMsg.mobile,
                  OrderList: data.orderMsg.orderServices,
                  totalMoney: data.orderMsg.totalMoney,
                  discountPrice: data.orderMsg.discountPrice,
                  payPrice: data.orderMsg.payPrice,
                  orderCode: data.orderMsg.orderCode,
                  orderDate: data.orderMsg.orderDate,
                  portait: data.userMsg.portait
                })
              }
            })
          },
        })
      },
    })
  },
  shopPhone: function () {
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.shopPhon,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  bindViewpay: function () {
    wx: wx.navigateTo({
      url: '../pay/pay',
    })
  },
  bindViewevaluateorder: function () {
    wx.navigateTo({
      url: '../evaluateorder/evaluateorder',
    })
  },
  goPhome: function () {
    wx.makePhoneCall({
      phoneNumber: '(021)58180562',
    })
  },
  shopMap: function () {
    wx.navigateTo({
      url: '../searchmap/searchmap',
    })
  }
})
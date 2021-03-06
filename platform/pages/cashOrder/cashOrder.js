var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopPhon:"",
    lat: "",
    lng: "",
    merLng: "",
    merLat: "",
    merName: ""
  },
  onLoad: function () {
    var that = this;
    wx.getStorage({
      key: 'lat',
      success: function (res) {
        var lat = res.data;
        that.setData({
          lat: lat
        })
      },
    })
    wx.getStorage({
      key: 'lng',
      success: function (res) {
        var lng = res.data;
        that.setData({
          lng: lng
        })
      },
    })
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
                'content-type': 'application/x-www-form-urlencoded'//默认值
              },
              success: function (msg) {
                var data = msg.data.data;
                console.log(msg);
                that.setData({
                  shopPhon: data.merchantMsg.mobile,
                  personName: data.userMsg.user_name,
                  phoneNumber: data.userMsg.mobile,
                  shopsName: data.merchantMsg.merchant_name,
                  shopsPlace: data.merchantMsg.address,
                  shopsDistance: data.distance2,
                  shopLogo: data.merchantMsg.merchant_img,
                  OrderList: data.orderMsg.orderServices,
                  totalMoney: data.orderMsg.totalMoney,
                  discountPrice: data.orderMsg.discountPrice,
                  payPrice: data.orderMsg.payPrice,
                  orderCode: data.orderMsg.orderCode,
                  orderDate: data.orderMsg.orderDate,
                  portait: data.userMsg.portait,
                  merName: data.merchantMsg.merchant_name,
                  merLng: data.merchantMsg.lng,
                  merLat: data.merchantMsg.lat
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
  //地图
  shopMap:function(){
    var that = this;
    var city = "",
      desc = "",
      latitude = that.data.lat,
      latitude2 = that.data.merLat,
      longitude = that.data.lng,
      longitude2 = that.data.merLng,
      name = that.data.merName;
    wx.navigateTo({
      url: `../map/map?longitude=${longitude}&latitude=${latitude}&longitude2=${longitude2}&latitude2=${latitude2}&city=${city}&name=${name}&desc=${desc}`,
    })
  },
  bindViewevaluateorder: function () {
    wx.navigateTo({
      url: '../evaluateorder/evaluateorder',
    })
  },
  goPhone: function () {
    wx.makePhoneCall({
      phoneNumber: '4008201868',
    })
  }
})
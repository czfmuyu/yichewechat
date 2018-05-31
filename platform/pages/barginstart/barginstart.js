 // pages/friendsbargainc/friendsbargainc.js
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    havemsg: false,
    userBargainId:"",
     acitivityId:""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var userBargainId = options.userBargainId;
    var acitivityId = options.acitivityId;
    that.setData({
      userBargainId: userBargainId,
      acitivityId: acitivityId
    })
    wx.request({
      url: app.globalData.testUrl + '/activity/userBargainDetail',
      method: 'post',
      data: {
        //从上个页面获取
        userBargainId: userBargainId
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'//默认值
      },
      success: function (msg) {
        var help = msg.data.data.userBargainHelps;
        if (help.length == 0) {
          that.setData({
            havemsg: false,
            userSrc: msg.data.data.portait,
            storeba: msg.data.data.img,
            washcoupons: msg.data.data.activityName,
            pnum: msg.data.data.attendAmount,
            nprice: msg.data.data.minPrice,
            oprice: msg.data.data.originalPrice,
            origprice: msg.data.data.originalPrice,
            middleprice: msg.data.data.middlePrice,
            bottomprice: msg.data.data.minPrice,
            pnuma: msg.data.data.middleNum,
            pnumb: msg.data.data.minNum,
            saleprice: msg.data.data.currentPrice,
            cutedprice: msg.data.data.minPrice,
            friendsCutList: msg.data.data.userBargainHelps//好友帮助砍价列表
          })
        } else {
          that.setData({
            havemsg: true,
            userSrc: msg.data.data.portait,
            storeba: msg.data.data.img,
            washcoupons: msg.data.data.activityName,
            pnum: msg.data.data.attendAmount,
            nprice: msg.data.data.minPrice,
            oprice: msg.data.data.originalPrice,
            origprice: msg.data.data.originalPrice,
            middleprice: msg.data.data.middlePrice,
            bottomprice: msg.data.data.minPrice,
            pnuma: msg.data.data.middleNum,
            pnumb: msg.data.data.minNum,
            saleprice: msg.data.data.currentPrice,
            cutedprice: msg.data.data.minPrice,
            friendsCutList: msg.data.data.userBargainHelps//好友帮助砍价列表
          })
        }
      }
    })
  },
  //立即购买
  bindViewBuy: function () {
    var that=this;
    wx.request({
      url: app.globalData.testUrl + '/activity/bargainPay',
      method: 'post',
      data: {
        userId: app.globalData.userId,
        activityId: that.data.acitivityId,
        carId: app.globalData.carId
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'//默认值
      },
      success: function (res) {
        wx.setStorage({
          key: 'paybargain',
          data: res,
        })
        console.log(res)
        wx.navigateTo({
          url: '../paybargain/paybargain',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    var that = this;
    withShareTicket: true;
    if (res.from === 'button') {
      return {
        title: "一车独秀砍价活动",
        path: '/pages/friendsbargain/friendsbargain?userBargainId=' + that.data.userBargainId,
        success: function (res) {
          console.log(res)
          console.log("分享成功~~")
          console.log(that.data.userBargainId)
        },
        fail: function (req) {
          console.log(req);
        },
      }
    }else{
      return {
        title: "一车独秀砍价活动",
        path: '/pages/friendsbargain/friendsbargain?userBargainId=' + that.data.userBargainId,
        success: function (res) {
          console.log(res)
          console.log("分享成功~~")
          console.log(that.data.userBargainId)
        },
        fail: function (req) {
          console.log(req);
        },
      }
    }
  }
})
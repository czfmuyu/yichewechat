// pages/friendsbargainb/friendsbargainb.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userBargainId:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that =this;
    var userBargainId = options.userBargainId;
    var userNum = parseInt(userBargainId);
      that.setData({
        userBargainId: userNum
      })
    console.log(userNum)
        app.request({
          url: app.globalData.testUrl + '/activity/helpResult',
          method: 'post',
          data: {
            userBargainId: userNum
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'//默认值
          },
          success: function (msg) {
            //console.log(msg);
            that.setData({
              joinpeople: msg.data.data.helpNum,
              userSrc: msg.data.data.portait,
              washcoupons: msg.data.data.activityName,
              pnum: msg.data.data.attendAmount,
              nprice: msg.data.data.minPrice,
              oprice: msg.data.data.originalPrice,
              origprice: msg.data.data.originalPrice,
              middleprice: msg.data.data.middlePrice,
              bottomprice: msg.data.data.minPrice,
              pnuma: msg.data.data.middleNum,
              pnumb: msg.data.data.minNum,
              userName: msg.data.data.userName,
              storeba: msg.data.data.img,
            })
          }
        })
  },
  //事件处理函数
  //我也要发起
  bindViewStart: function () {
    var that=this;
    //console.log("我也要发发起活动")
    wx.navigateTo({
      url: '../bargainactivity/bargainactivity',
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
  goHome:function(){
    wx.switchTab({
      url: '../index/index',
    })
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
  onShareAppMessage: function () {
  
  }
})
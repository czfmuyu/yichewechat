var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasList: false,
    illegalList: "",
    breakRules: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    app.request({
      url: app.globalData.testUrl + '/carInformation/wxUserDefaultCarQuery',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        userId: app.globalData.userId, //298
      },
      success: function (res) {
        console.log(res)
        var breakRules = res.data.data;
        var abreakRules = breakRules.breakRules;
        that.setData({
          illegalList: res.data.data
        })
        that.setData({
          hasList: true,
          breakRules: res.data.data.breakRules
        })
        if (abreakRules == null || abreakRules.length == 0) {
          that.setData({
            hasList: false
          })
        }
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

  }
})
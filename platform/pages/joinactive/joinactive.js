var app =getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    appGeneralize: '汽车服务全包揽 , 用一车独秀APP',
    activityId:"",
    userBargainId:"",
    showModalStatus: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    app.request({
      url: app.globalData.testUrl + '/project/searchMyActivity',
      method: 'post',
      data: {
        userId: app.globalData.userId
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'//默认值
      },
      success: function (msg) {
        console.log(app.globalData.userId)
        console.log(msg)
        that.setData({
          bargainactiveList:msg.data.data.bargainActivity,
          groupList :msg.data.data.groupActivity
        })
      }
    })
  },
  //点击跳转到砍价
  bargainDetailView:function(e){
    var that=this;
    var status = e.currentTarget.dataset.status;
    var userBargainId = e.currentTarget.dataset.id;
    var activityId = e.currentTarget.dataset.activityid;
    console.log(userBargainId,status)
    that.setData({
      userBargainId: userBargainId
    })
    if(status == -1){//失败页
      wx.navigateTo({
        url: '../friendsbargaine/friendsbargaine?userBargainId=' + userBargainId,
      })
    }else if(status == 0){//等待中
      wx.navigateTo({
        url: '../friendsbargainc/friendsbargainc?userBargainId=' + userBargainId + '&activityId=' + activityId,
      })
    }else if(status == 1){//中间价
      wx.navigateTo({
        url: '../friendsbargainc/friendsbargainc?userBargainId=' + userBargainId + '&activityId=' + activityId,
      })
    }else{//完成
      wx.navigateTo({
        url: '../friendsbargaind/friendsbargaind?userBargainId=' + userBargainId + '&activityId=' + activityId,
      })
    }
  },

  //点击跳转到拼团
  groupDetailView : function(e){
    var that=this;
    var status = e.currentTarget.dataset.status;
    var group = e.currentTarget.dataset.group;
    wx.setStorage({
      key: 'activityId',
      data: e.currentTarget.dataset.id,
    })
    if (status == -1) {//失败页
      wx.navigateTo({
        url: '../groupfailure/groupfailure?group=' + group,
      })
    }else if(status == 0){//拼团中
      wx.navigateTo({
        url: '../startgroupmiddle/startgroupmiddle?group=' + group,
      })
    }else{//成功
      wx.navigateTo({
        url: '../groupsuccess/groupsuccess?group=' + group,
      })
    }

  },
  godown:function(){
    app.request({
      url: 'http://www.glongcar.com/xlxq/#/download',
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
  goDown: function () {
    var that = this;
    that.setData({
      showModalStatus: true
    })
  },
  hidepic: function () {
    var that = this;
    that.setData({
      showModalStatus: false
    })
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
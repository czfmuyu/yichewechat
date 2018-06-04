Page({

  /**
   * 页面的初始数据
   */
  data: {
    editModel: false,
    delImg: 'http://116.62.151.139/res/img/delete.png',
    addImg: 'http://116.62.151.139/res/img/add.png',
    servelList: [
      {
        id: 1,
        serve1P: 'http://116.62.151.139/res/img/2washserve.png',
        pos: 1,
        name:"拼团活动"
      },
      {
        id: 2,
        serve1P: 'http://116.62.151.139/res/img/2washserve.png',
        pos: 1,
        name: "砍价活动"
      },
      {
        id: 3,
        serve1P: 'http://116.62.151.139/res/img/2washserve.png',
        pos: 1,
        name: "优惠券"
      },
      {
        id: 4,
        serve1P: 'http://116.62.151.139/res/img/2washserve.png',
        pos: 2,
        name: "代金券"
      }
    ],
    allServelList: [
      {
        id: 5,
        serve1P: 'http://116.62.151.139/res/img/2washserve.png',
        pos: 1,
      },
      {
        id: 6,
        serve1P: 'http://116.62.151.139/res/img/2washserve.png',
        pos: 1,
      },
      {
        id: 7,
        serve1P: 'http://116.62.151.139/res/img/2washserve.png',
        pos: 1,
      },
      {
        id: 8,
        serve1P: 'http://116.62.151.139/res/img/2washserve.png',
        pos: 1,
      },
      {
        id: 9,
        serve1P: 'http://116.62.151.139/res/img/2washserve.png',
        pos: 1,
      },
      {
        id: 10,
        serve1P: 'http://116.62.151.139/res/img/2washserve.png',
        pos: 1,
      },
      {
        id: 11,
        serve1P: 'http://116.62.151.139/res/img/2washserve.png',
        pos: 2,
      },
      {
        id: 12,
        serve1P: 'http://116.62.151.139/res/img/2washserve.png',
        pos: 2,
      },
    ]
  },

  //“编辑”/“完成”状态判断
  editTap: function (e) {
    var editModel = this.data.editModel;
    this.setData({
      editModel: !editModel,
    })
  },

  //点加号后的效果
  addTap: function (e) {
    var id = e.currentTarget.dataset.id;
    if (!this.data.editModel || id == '') {
      return;
    }
    this.addItem(id);
  },
  addItem: function (id) {
    var item = null;
    for (var i = 0; i < this.data.allServelList.length; i++) {
      if (this.data.allServelList[i].id == id) {
        item = this.data.allServelList[i];
        this.data.allServelList.splice(i, 1);
        break;
      }

    };
    this.setData({
      allServelList: this.data.allServelList,
    });

    this.data.servelList.push(item);
    this.setData({
      servelList: this.data.servelList,
    });

  },

  //点减号后的效果
  deleteTap: function (e) {
    var id = e.currentTarget.dataset.id;

    if (!this.data.editModel || id == '') {
      return;
    }
    this.delItem(id);
  },

  delItem: function (id) {
    var item = null;
    for (var i = 0; i < this.data.servelList.length; i++) {
      if (this.data.servelList[i].id == id) {
        item = this.data.servelList[i];
        this.data.servelList.splice(i, 1);
        break;
      }
    };
    this.setData({
      servelList: this.data.servelList,
    });

    this.data.allServelList.push(item);
    this.setData({
      allServelList: this.data.allServelList,
    });

  },
})
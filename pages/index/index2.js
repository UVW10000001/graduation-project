Component({
  pageLifetimes: {
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 1
        })
      }
    }
  },
  data:{
  },
  // 跳转介绍1
  bathingrecords() {
    wx.navigateTo({
      url: '/pages/Bathingrecords/Bathingrecords',
    })
  },
  // 跳转介绍2
  bathingOrder() {
    wx.navigateTo({
      url: '/pages/bathingOrder/bathingOrder',
    })
  },
  // 跳转简介
  /*wmdgs(e) {
    console.log(e.currentTarget.dataset.id)
    if (e.currentTarget.dataset.id == 0) {
      wx.navigateTo({
        url: '/pages/introduce/introduce',
      })
    }
  },*/
  methods:{
    onShareAppMessage: function () {
      return {
        title: '一只小狗勾的洗护预约',
      }
    },
    // 意见反馈
    // bathback(){
    //   wx.navigateToMiniProgram({
    //     appId: 'wx8abaf00ee8c3202e',
    //     path: 'pages/index/index',
    //     extraData: {
    //       id:"176204"
    //     },
    //     envVersion: 'release',
    //     success(res) {
    //       // 打开成功
    //     }
    //   })
    // },
    bathingrecords(){
      wx.navigateTo({
        url: '../Bathingrecords/Bathingrecords',
      })
    },   
     bathcomment(){
      wx.navigateTo({
        url: '../comment/comment',
      })
    },
    bathingOrder(){
      wx.navigateTo({
        url: '../bathingOrder/bathingOrder',
      })
    }
  }
  
})

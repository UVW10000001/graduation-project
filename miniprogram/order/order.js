// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startTime: "",
   // endTime: "",
    type: "",
    tel: "",
    reson: ""
  },

  //预约的开始时间
  getStartTime(e) {
    console.log(e.detail.value);
    this.setData({
      startTime: e.detail.value
    })
  },
  /*getEndTime(e) {
    this.setData({
      endTime: e.detail.value
    })
  },
  */
  //套餐类型
  getType(e) {
    this.setData({
      type: e.detail.value
    })
  },
  getTel(e) {
    this.setData({
      tel: e.detail.value
    })
  },
  //评价
  getReson(e) {
    this.setData({
      reson: e.detail.value
    })
  },

  //提交按钮
  submit() {
    console.log(this.data);
    //拿到用户信息
    var info = wx.getStorageSync("Order");
    //请求参数
    var reqData = {
      startTime: this.data.startTime,
      //endTime: this.data.endTime,
      user_name: info.user_name,
      //phone: info.phone,
      pet_name: pet_name,
      type: this.data.type,
      contact: this.data.phone,
      //评价
      comment: this.data.reson
    };
    if (reqData.startTime == "") {
      wx.showToast({
        title: '请选择开始时间',
        icon: 'none'
      });
      return;
    }
    /*if (reqData.endTime == "") {
      wx.showToast({
        title: '请选择结束时间',
        icon: 'none'
      });
      return;
    }*/
    if (reqData.type == "") {
      wx.showToast({
        title: '请输入套餐类型',
        icon: 'none'
      });
      return;
    }
    if (reqData.contact == "") {
      wx.showToast({
        title: '请输入联系方式',
        icon: 'none'
      });
      return;
    }
    /*if (reqData.comment == "") {
      wx.showToast({
        title: '备注',
        icon: 'none'
      });
      return;
    }
    */

    var that = this;
    //发起请求
    wx.request({
      url: getApp().host + "Order/add",
      method: "POST",
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: reqData,
      success: function (resp) {
        console.log(resp)
        wx.showToast({
          title: resp.data.info,
          icon: 'none',
          duration: 2000
        });
        //将刚才填写的信息清空
        that.setData({
          startTime: "",
          //endTime: "",
          type: "",
          tel: "",
          reson: ""
        })
      }
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  onShareAppMessage: function () {

  }
})
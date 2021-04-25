// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "",
    BathingCombo: "",
    reson: ""
  },

  //预约的开始时间
  getDate(e) {
    console.log(e.detail.value);
    this.setData({
      date: e.detail.value
    })
  },
  //套餐类型
  getBathingCombo(e) {
    this.setData({
      BathingCombo: e.detail.value
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
      date: this.data.startTime,
      BathingCombo: this.data.BathingCombo,
      comment: this.data.reson
    };
    if (reqData.date == "") {
      wx.showToast({
        title: '请选择开始时间',
        icon: 'none'
      });
      return;
    }
    if (reqData.BathingCombo == "") {
      wx.showToast({
        title: '请输入套餐类型',
        icon: 'none'
      });
      return;
    }
    if (reqData.comment == "") {
      wx.showToast({
        title: '备注',
        icon: 'none'
      });
      return;
    }
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
          data: "",
          BathingCombo: "",
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
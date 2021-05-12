// miniprogram/pages/bathingOrder/bathingOrder.js
// const lessonTmpId = 'WdlcaWNIcLnN50CbHmCMW3Bw79tADilUA-hgj4EEqnI'
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bathingOrder:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  details(e){
    // console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../Appointmentdetails/Appointmentdetails?id='+e.currentTarget.dataset.id,
    })
  },
  myphone(){
    wx.makePhoneCall({
      phoneNumber: '17792673014'
    })
  },
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://localhost:8080/phone/appointmentinfo',
      method:"GET",
      header:{
        'Content-Type':"application/x-www-form-urlencoded",
        'cookie': wx.getStorageSync("sessionid")
      },
      success:function(resp){
        console.log(resp);
        //预约信息
        var uname = resp.data.data.username;
        console.log(uname)
        var date = resp.data.data.date;
        console.log(date)
        // var uInfo = resp.data.data.usersInfo;
        //存储相关信息,以供假条使用
        var detail = {
          uname:uname,   
          date:date      
        };
        wx.setStorageSync("detail", detail);
        //渲染到界面
        that.setData({
          uname: uname,
          date: date
        })
        console.log("~~~~~~~~~")
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
  onShareAppMessage: function () {

  }
})
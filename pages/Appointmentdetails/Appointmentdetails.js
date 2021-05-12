// miniprogram/pages/Appointmentdetails/Appointmentdetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Appointmentdetails:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  /*onLoad: function (options) {
    // console.log(options.id)
    this.Appointmentdetails(options.id)
  },*/
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
        var pho = resp.data.data.phone;
        console.log(pho)
        var uname = resp.data.data.username;
        console.log(uname)
        var pname = resp.data.data.petname;
        console.log(pname)
        var combo = resp.data.data.combo;
        console.log(combo)
        var date = resp.data.data.date;
        console.log(date)
        // var uInfo = resp.data.data.usersInfo;
        //存储相关信息,以供假条使用
        var detail = {
          uname:uname,
          pname:pname,
          combo:combo,
          date:date,
          phone:pho
        };
        wx.setStorageSync("detail", detail);
        //渲染到界面
        that.setData({
          uname: uname,
          pname: pname,
          combo: combo,
          date: date,
          phone: pho
        })
        console.log("!!!!!!!!!!!!!!!!!!!!!")
      }
    })
  },
  Appointmentdetails(id){
    db.collection('order').doc(id).get().then(res => {
      // res.data 包含该记录的数据
      // console.log(res.data)
        if(res.data.done == 1){
         res.data.done = '已预约'
        }else if(res.data.done == 2){
         res.data.done = '进行中'
        }else if(res.data.done == 3){
         res.data.done = '已完成'
        }
      this.setData({
        Appointmentdetails:res.data
      })
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
// miniprogram/pages/bathingOrder/bathingOrder.js
// const lessonTmpId = 'WdlcaWNIcLnN50CbHmCMW3Bw79tADilUA-hgj4EEqnI'
const db = wx.cloud.database()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    bathingOrder:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取订单数据
    this.inquiryAppointment()
  },
  inquiryAppointment(){
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name:'inquiryAppointment',
      data:{
        done:1,
      }
    }).then((res)=>{
      // console.log(res.result.data)
      this.setData({
        bathingOrder:res.result.data
      })
      wx.hideLoading()
    })
  },
  // 发起订阅通知
  onsu(){
    let date = new Date(Date.parse(new Date()) + 5000)
    const item = {
      thing1:{
        value:'预约宠物洗护',
      },
      phrase3:{
        value:'通过'
      },
      thing4:{
        value:'请按时到达，以便开始服务'
      }
    }
    // 调起客户端小程序订阅消息界面，返回用户订阅消息的操作结果。
    wx.requestSubscribeMessage({
      tmplIds: [lessonTmpId],
      success(res){
        if(res.errMsg === 'requestSubscribeMessage:ok'){
          wx.cloud.callFunction({
            name:'subsribe',
            data:{
              data:item,
              date:date,
              templateId:lessonTmpId
            }
          }).then(()=>{

          })
        }
      }
    })
  },
  
  details(e){
    // console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '../Appointmentdetails/Appointmentdetails?id='+e.currentTarget.dataset.id,
    })
  },
  phone(){
    wx.makePhoneCall({
      phoneNumber: '17792673014'
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
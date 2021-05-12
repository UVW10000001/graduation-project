Page({
  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    phone:'',
    petname:'',
    date:'2021.05.16 17:30',
    columns: ['套餐A', '套餐B', '套餐C'],
    combo:'套餐A',

    //错误提示
    err_phone:"",
    err_username: '',
    err_petname: '',
    err_date: '', 
    err_combo: '', 
   
    //日历插件
    isShow: false,   // 默认不显示插件
    beginTime: '8:30',
    endTime: '22:00',
    timeGap: 60,
    themeColor: 'pink',
    showOverdue: true,    // 默认显示过期时刻，false则隐藏已过期时刻
    calendarType: 'yytime',
    days: 0,    //默认展示某天。正整数，0为当天 
    time: '14:00',    //默认选中某天的某时刻,过期无效 

  },

  // 点击显示插件
  btnClick: function () {
    this.setData({
      isShow: true,
    })
  },

  _yybindchange: function (e) {
    var data = e.detail
    console.log(data)
  },

  _yybindhide: function () {
    console.log('隐藏')
  },


 // 洗护套餐选择 picker 事件
 onChange(event) {
  const { value } = event.detail;
  this.setData({
    combo: value,
  })
},
  // 洗护套餐隐藏
  onClose1() {
    this.setData({ show1: false });
  },
  // 洗护套餐展示
  showPopup() {
    this.setData({ show1: true });
  },
  onCancel(){
    this.setData({ show1: false });
  },
   // 洗护套餐确认
   onConfirm_pv(e){
    this.setData({
      combo: e.detail.value,
      show1: false,
    })
    if(this.data.combo){
      this.setData({ err_combo:''})
    }
  },
 // 数据校验
    username(e) {
    this.setData({ username:e.detail})
    if(this.data.user_name.trim() == ''){
      this.setData({ err_username:'姓名不能为空'})
    }else{
      this.setData({ err_username: '' })
    }
  },
  // 数据校验
  petname(e) {
    this.setData({ petname: e.detail })
    if (this.data.petname.trim() == '') {
      this.setData({ err_petname: '宠物姓名不能为空' })
    } else {
      this.setData({ err_petname: '' })
    }
  },
  // 数据校验
  phone(e) {
    this.setData({ phone: e.detail.value })
    var myreg = /^[1][0-9]{10}$/
    if (!myreg.test(this.data.phone)) {
      this.setData({ err_phone: '手机号码格式有误' })
    } else {
      this.setData({ err_phone: '' })
    }
  },
 
  // 立即预约
  book() {
    //请求参数
    var reqData = {
      username:this.data.username,
      petname:this.data.petname,
      phone:this.data.phone,
      combo:this.data.combo,
      date:this.data.date
    };
    console.log(reqData)
    var myreg = /^[1][0-9]{10}$/
    if (this.data.username == ''){
      this.setData({ err_username: '姓名不能为空' })
      return false
    } else if (!myreg.test(this.data.phone)){
      this.setData({ err_phone: '手机号码格式有误' })
      return false
    } else if (this.data.petname == '') {
      this.setData({ err_petname: '宠物姓名不能为空' })
      return false
    } else if(this.data.date == ''){
      this.setData({ err_date:'请选择预约时间'})
      return false
    } else if (this.data.combo == ''){
      this.setData({ err_combo: '请选择洗护套餐' })
      return false
    }else{
      
      
      wx.request({
        url: 'http://localhost:8080/pet/record',
        data:reqData,
        header:{
          'content-type':'application/x-www-form-urlencoded'
          // 'content-type':'application/json'
        },
        method:'POST',
      success:(resp)=>{
        console.log(this.data);
        //获取后台返回的数据
          console.log(resp);
          console.log(resp.data);
          if(resp.data.status == 0){
            //预约失败
          wx.showToast({
            title: resp.data.info,
            duration:2000,
            icon:'none'
          });
          // 重置
          that.setData({
            username:'',
            phone:'',
            date:'',
            combo:'',
            petname:''
        })
        }else
           {
              //保存sessionid,目的是为了保持登录状态
            //setStorageSync 将一些数据保存在小程序本地
            wx.setStorageSync("sessionid", resp.header['Set-Cookie']);
            //获取storage中的值
            console.log(wx.getStorageSync("sessionid"));

            //预约成功
            wx.redirectTo({
              url: '../AppointmentSuccessful/AppointmentSuccessful',
            })
           
          }
      }
    })
  }
},

  back() {
    wx.navigateBack({
      delta: 1
    })
  },
  back_index() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },
  onDisplay() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  click(e){
    console.log('e',e)
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


Component({
  pageLifetimes: {
    // 组件所在页面的生命周期声明对象
    show() {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        this.getTabBar().setData({
          selected: 0
        })
      }
      // 调用获取首页店铺数据
      //this.community_Arr()
      // 调用轮播图数据
     // this.swiperArr()
    },
    
  },
  data: {
    indicatorDots:true,
    autoplay:true,
    interval:2000,
    duration:500,
    banners: null,
   // currentSwiper:0, // 自定义的 swiper 指示器索引
    scroll_Top:0,
    community_Arr:[],
    changeType:0,
  },
  // 组件生命周期
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
      
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
 methods:{
    // 获取首页店铺数据
    community_Arr(){
      wx.cloud.callFunction({
        name: 'index_community_Arr',
        complete: res => {
          // console.log(res.result.data)
          this.setData({
            community_Arr:res.result.data
          })
        }
      })
    },
    // 跳转介绍1
    introduce(){
      wx.navigateTo({
        url: '/pages/introduce/introduce',
      })
    },
   // 跳转介绍2
   price() {
     wx.navigateTo({
       url: '/pages/price/price',
     })
   },
   // 跳转介绍3
   appointmentdetails() {
     wx.navigateTo({
       url: '/pages/Appointmentdetails/Appointmentdetails',
     })
   },
   // 跳转介绍4
   appointmentBathing() {
     wx.navigateTo({
       url: '/pages/AppointmentBathing/AppointmentBathing',
     })
   },
  
    // 跳转简介
    wmdgs(e){
      console.log(e.currentTarget.dataset.id)
      if(e.currentTarget.dataset.id == 0){
        wx.navigateTo({
          url: '/pages/introduce/introduce',
        })
      }
    },
    // 跳转店铺数据
    details(e){
      // console.log(e.currentTarget.dataset.id)
      wx.navigateTo({
        url: "/pages/details/details?id="+ e.currentTarget.dataset.id,
      })
    },
    onShareAppMessage: function () {
      return {
        title: '一只小狗勾',
      }
    },
    onShareTimeline(){
      return{
        title:'一只小狗勾',
      }
    }
  },
})

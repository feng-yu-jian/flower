const app = getApp()
Page({
  data: {
    inTheaters:[],
    comingSoon:[],
    top250:[],
    searchResult:false,
    searchData:[]
  },

  onLoad: function (options) {
    // const that = this
    wx.request({
      url: app.gBaseUrl + 'in_theaters',
      data:{
        start:0,
        count:3
      },
      // success(res){
      //   this.setData({  // this是在回调函数中调用的，this指向undefined
      //     inTheaters:res.data.subjects
      //   })
      // }
      // success(res) {
      //   that.setData({
      //     inTheaters:res.data.subjects
      //   })
      // }
      success:(res)=>{
        this.setData({
          inTheaters:res.data.subjects
        })
      }
    })   
  
    wx.request({
      url: app.gBaseUrl + 'coming_soon',
      data:{
        start:0,
        count:3
      },
      success:(res)=>{
        this.setData({
          comingSoon:res.data.subjects
        })
      }
    })
    wx.request({
      url: app.gBaseUrl + 'top250',
      data:{
        start:0,
        count:3
      },
      success:(res)=>{
        this.setData({
          top250:res.data.subjects
        })
      }
    })
  },

  onGotoMore(event){
    console.log(event)
    const type = event.currentTarget.dataset.type
    wx.navigateTo({
      url: '/pages/more-movie/more-movie?type=' + type,
    })
  },

  onConfirm(event){
    this.setData({
      searchResult:true
    })
    wx.request({
      url: app.gBaseUrl + 'search',
      data:{
        q:event.detail.value
      },
      success:(res)=>{
        this.setData({
          searchData:res.data.subjects
        })
      },
    })
  },

  onSearchCancel(event){
    this.setData({
      searchResult:false
    })
  }
})
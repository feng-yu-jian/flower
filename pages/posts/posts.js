import {
  postList
} from '../../data/data.js'

Page({
  data: {

  },
  onLoad() {
    this.setData({
      postList
    })
  },
  onGoToDetail(event) {
    // console.log(event)
    const pid = event.currentTarget.dataset.postId | event.detail.pid
    console.log(pid)
    wx.navigateTo({
      url: '/pages/post-detail/post-detail?pid=' + pid
    })
  }
})
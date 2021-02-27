import {convertToCastString, convertToCastInfos} from '../../utils/util.js'
const app = getApp()
Page({
  data: {
    movie:{}
  },
  onLoad: function (options) {
    const mid = options.mid
    wx.request({
      url: app.gBaseUrl + 'subject/' + mid,
      success:(res)=>{
        console.log(res.data)
        this.processMovieData(res.data)
        // this.setData({
        //   movie:res.data
        // })
      }
    })
  },
  processMovieData(movie){
    const data = {}
    data.directors = convertToCastString(movie.directors)
    // console.log(movie.directors)
    // console.log(data.directors)
    data.casts = convertToCastString(movie.casts)
    // console.log(data.casts)
    data.image = movie.images.large
    data.title = movie.title
    data.subtitle = movie.countries[0]+'·'+movie.year
    data.wishCount = movie.wish_count
    data.commentsCount = movie.comments_count
    data.rating = movie.rating.stars/10
    data.average = movie.rating.average
    data.genres = movie.genres.join('、')
    data.summary = movie.summary
    data.castsInfo = convertToCastInfos(movie.casts)
    this.setData({
      movie:data
    })
  },

  onViewPost(event){
    wx.previewImage({
      urls: [this.data.movie.images.large],
    })
  }
})
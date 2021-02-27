Component({
  /**
   * 组件的属性列表
   */
  properties: {
    res:Object
  },

  data: {

  },

  /**
   * 自定义事件
   */
  methods: {
    onTap(event){
      const pid = this.properties.res.postId
      this.triggerEvent('posttap',{
        pid
      })
    },
  }
})

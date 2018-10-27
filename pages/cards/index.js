// pages/cards/index.js
Page({

  /**
   * 页面的初始数据
   */
  // data: {
  //   dataList: [{
  //     word: '毕业于上海师范大学，艺术教育专业，擅长小学美术教学以及各类广告设计，幽默风趣，对小孩耐心，细心，熟悉上海中美院各类考级：素描、速写、水粉、成人油画等…2017学年荣获和平海报优秀指导教师。',
  //   }, {
  //       word: '毕业于上海师范大学，艺术教育专业，擅长小学美术教学以及各类广告设计，幽默风趣，对小孩耐心，细心，熟悉上海中美院各类考级：素描、速写、水粉、成人油画等…2017学年荣获和平海报优秀指导教师。',
  //     }, {
  //       word: '毕业于上海师范大学，艺术教育专业，擅长小学美术教学以及各类广告设计，幽默风趣，对小孩耐心，细心，熟悉上海中美院各类考级：素描、速写、水粉、成人油画等…2017学年荣获和平海报优秀指导教师。',
  //     }, {
  //       word: '毕业于上海师范大学，艺术教育专业，擅长小学美术教学以及各类广告设计，幽默风趣，对小孩耐心，细心，熟悉上海中美院各类考级：素描、速写、水粉、成人油画等…2017学年荣获和平海报优秀指导教师。',
  //     }, {
  //       word: '毕业于上海师范大学，艺术教育专业，擅长小学美术教学以及各类广告设计，幽默风趣，对小孩耐心，细心，熟悉上海中美院各类考级：素描、速写、水粉、成人油画等…2017学年荣获和平海报优秀指导教师。',
  //     }, {
  //       word: '毕业于上海师范大学，艺术教育专业，擅长小学美术教学以及各类广告设计，幽默风趣，对小孩耐心，细心，熟悉上海中美院各类考级：素描、速写、水粉、成人油画等…2017学年荣获和平海报优秀指导教师。',
  //     }],
  //   swiperIndex: 0
  // },

  // /**
  //  * 生命周期函数--监听页面加载
  //  */
  // onLoad: function (options) {
  
  // },

  // /**
  //  * 生命周期函数--监听页面初次渲染完成
  //  */
  // onReady: function () {
  
  // },

  // /**
  //  * 生命周期函数--监听页面显示
  //  */
  // onShow: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面隐藏
  //  */
  // onHide: function () {
  
  // },

  // /**
  //  * 生命周期函数--监听页面卸载
  //  */
  // onUnload: function () {
  
  // },

  // /**
  //  * 页面相关事件处理函数--监听用户下拉动作
  //  */
  // onPullDownRefresh: function () {
  
  // },

  // /**
  //  * 页面上拉触底事件的处理函数
  //  */
  // onReachBottom: function () {
  
  // },

  // /**
  //  * 用户点击右上角分享
  //  */
  // onShareAppMessage: function () {
  
  // },
  // swiperChange(e) {
  //   this.setData({
  //     swiperIndex: e.detail.current
  //   })
  // },
  // catchTap(e){
  //   var index = e.currentTarget.dataset.index;
  //   var query = wx.createSelectorQuery();
  //   //选择id
  //   var that = this;
  //   query.selectAll('.card_item').boundingClientRect(function (rect) {
  //     console.log(rect[index-1])
  //     var i = 0;
  //     var t = null;
  //     // rect[0].height = 100 
  //   }).exec();
  // }
  data: {
    //轮播图
    // swiperCurrent: 1,
    // arr: [{
    //   images: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    // },
    // {
    //   images: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    // },
    // {
    //   images: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    // },
    // {
    //   images: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    // }
    
    // ],
    // indicatorDots: false,
    // autoplay: true,
    // interval: 2000,
    // duration: 1000,
    // circular: true,
    // beforeColor: "white",//指示点颜色  
    // afterColor: "coral",//当前选中的指示点颜色  
    // previousmargin: '20px',//前边距
    // nextmargin: '20px',//后边距
    imgUrls: [
      {
        word: '毕业于上海师范大学，艺术教育专业，擅长小学美术教学以及各类广告设计，幽默风趣，对小孩耐心，细心，熟悉上海中美院各类考级：素描、速写、水粉、成人油画等…2017学年荣获和平海报优秀指导教师。',
      }, {
        word: '毕业于上海师范大学，艺术教育专业，擅长小学美术教学以及各类广告设计，幽默风趣，对小孩耐心，细心，熟悉上海中美院各类考级：素描、速写、水粉、成人油画等…2017学年荣获和平海报优秀指导教师。',
      }, {
        word: '毕业于上海师范大学，艺术教育专业，擅长小学美术教学以及各类广告设计，幽默风趣，对小孩耐心，细心，熟悉上海中美院各类考级：素描、速写、水粉、成人油画等…2017学年荣获和平海报优秀指导教师。',
      }, {
        word: '毕业于上海师范大学，艺术教育专业，擅长小学美术教学以及各类广告设计，幽默风趣，对小孩耐心，细心，熟悉上海中美院各类考级：素描、速写、水粉、成人油画等…2017学年荣获和平海报优秀指导教师。',
      }, {
        word: '毕业于上海师范大学，艺术教育专业，擅长小学美术教学以及各类广告设计，幽默风趣，对小孩耐心，细心，熟悉上海中美院各类考级：素描、速写、水粉、成人油画等…2017学年荣获和平海报优秀指导教师。',
      }, {
        word: '毕业于上海师范大学，艺术教育专业，擅长小学美术教学以及各类广告设计，幽默风趣，对小孩耐心，细心，熟悉上海中美院各类考级：素描、速写、水粉、成人油画等…2017学年荣获和平海报优秀指导教师。',
      }
    ],
    swiperIndex: 0,
    swiperHeight:400

  },
  bindchange(e) {
    this.setData({
      swiperIndex: e.detail.current
    })
  },

  //轮播图的切换事件  
  swiperChange: function (e) {
    console.log(e.detail.current);
    this.setData({
      swiperCurrent: e.detail.current   //获取当前轮播图片的下标
    })
  },
  //滑动图片切换  
  chuangEvent: function (e) {
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  }

})
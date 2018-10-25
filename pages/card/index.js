// pages/card/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:0,
    content_height:0,
    default_height: '0rpx',
    active_height:'-300rpx',
    animationClose:'',
    animationData:'',
    dataList: [{ select: false, title: '英皇考级和国内考级有什么区别?', content: '没想到迎接她的是上映两日上座率仅仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底没想到迎接她的是上映两日上座率仅仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底没想到迎接她的是上映两日上座率仅仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底没想到迎接她的是上映两日上座率仅仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底', animation:  '',bottom:''},
      { select: false, title: '如何选择到适合自己孩子的老师', content: '没想到迎接她的是上映两日上座率仅仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底没想到迎接她的是上映两日上座率仅仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底没想到迎接她的是上映两日上座率仅仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底没想到迎接她的是上映两日上座率仅仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底', animation: '', bottom: ''},
      { select: false, title: '如何选择到适合自己孩子的老师', content: '没想到迎接她的是上映两日上座率仅仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底没想到迎接她的是上映两日上座率仅仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底没想到迎接她的是上映两日上座率仅仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底没想到迎接她的是上映两日上座率仅仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底', animation: '' },
      { select: false, title: '如何选择到适合自己孩子的老师', content: '没想到迎接她的是上映两日上座率仅仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底没想到迎接她的是上映两日上座率仅仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底没想到迎接她的是上映两日上座率仅仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底没想到迎接她的是上映两日上座率仅仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底没想到迎接她的是上映两日上座率仅仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底没想到迎接她的是上映两日上座率仅仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底没想到迎接她的是上映两日上座率仅仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底没想到迎接她的是上映两日上座率仅仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底没想到迎接她的是上映两日上座率仅仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底没想到迎接她的是上映两日上座率仅仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底没想到迎接她的是上映两日上座率仅仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底没想到迎接她的是上映两日上座率仅仅只有3.0%，票房低至390万的结局，被同期上映电影狠狠甩在最后垫底', animation: '' },

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    var query = wx.createSelectorQuery();
    var arr = []
    this.data.dataList.map((item,idx)=>{
     
      if(idx == 0){
        item.bottom = -wx.getSystemInfoSync().windowHeight -20  + 'px'
        arr.push(item)
      }else{
        item.bottom = -wx.getSystemInfoSync().windowHeight + 78 -20+ (idx-1) * 48 + 'px'
        arr.push(item)
      }
  
    })
    
      this.setData({
        height: wx.getSystemInfoSync().windowHeight +'px',
        dataList: this.data.dataList
      })
      

    
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

  },
  changeToggle: function (e) {

    var animation = wx.createAnimation({

      duration: 1000,
      timingFunction: "ease",
      delay: 0,
      transformOrigin: "0% 0%",

    })
    animation.translate(0, -100).step(); 


    var animations = wx.createAnimation({

      duration:1000,
      timingFunction: "ease",
      delay: 0,
      transformOrigin: "0% 0%",

    })
    animations.translate(0, 0).step(); 
    
       //边旋转边放大

    var index = e.currentTarget.dataset.index;
    var select = this.data.dataList[index].select ;
    for (var i = 0; i < this.data.dataList.length;i++){
      this.data.dataList[i].select = false
    }
    this.data.dataList[index].select = !select

 this.setData({ dataList: this.data.dataList, animationData:      animation.export(), animationClose: animations.export() })

 var index = e.currentTarget.dataset.index;
 var query = wx.createSelectorQuery();
 //选择id
 var that = this;
 query.selectAll('.li').boundingClientRect(function (rect) {
   console.log(rect[index])
   var active_height = 0;
   var  content_height =0;
   if(index == 0){
     active_height = -(wx.getSystemInfoSync().windowHeight) + 78 +2 + 'px'
     content_height= wx.getSystemInfoSync().windowHeight -  78 -20 + 'px'
   }else{
     active_height = -(wx.getSystemInfoSync().windowHeight) + 78 +2 + index * 48 + 'px'
     content_height = wx.getSystemInfoSync().windowHeight - 78 - 10 -20 - index*48 + 'px'

   }
   // 78 index 为 0 的tab 标签页的高度 10 为 文字padding-top 的高度 20 是 三角的高度和paddding-bottom 的值, 2为 当展开状态时防止被导航栏遮挡
   
   that.setData({
     
     active_height: active_height,
     content_height: content_height
   })
   

 }).exec();


  }, 

})
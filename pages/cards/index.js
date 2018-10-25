// pages/cards/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[{select:false,color:'red',animate:'',content:''}]
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
  catchTap(e){
    var index = e.currentTarget.dataset.index;
    var query = wx.createSelectorQuery();
    //选择id
    var that = this;
    query.selectAll('.card_item').boundingClientRect(function (rect) {
      console.log(rect[index-1])
      var i = 0;
      var t = null;
      // rect[0].height = 100 
    }).exec();
  }
})
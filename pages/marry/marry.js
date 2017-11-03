// pages/marry/marry.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    luntext: [
      { ctext: '征婚', img:'../image/chuang.png',con:'征婚' },
      { ctext: '房产信息', img: '../image/fangchan.png', con: '房产' },
      { ctext: '二手闲置', img: '../image/xianzhi.png', con: '二手' },
      { ctext: '车辆买卖', img: '../image/huodong.png', con: '车辆' },
      { ctext: '宠物服务', img: '../image/bendi.png', con: '宠物' },
      { ctext: '家电维修', img: '../image/jiandao.png', con: '家电' },
      { ctext: '物业服务', img: '../image/liwu.png', con: '物业' },
      { ctext: '美妆衣服', img: '../image/shangcheng.png', con: '美妆' }
    ],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 35
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
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
  
  }
})
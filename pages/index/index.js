
var app = getApp()

Page({
  data: {
    currentTab: 0,
    grids: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    swiperList:[0, 1, 2, 3, 4]
  },
  onLoad: function () {
  },
  click: function (e) {
    console.log(e.currentTarget.dataset.id)
    console.log(e.currentTarget.dataset.index)
    wx.showToast({
      title: '第' + e.currentTarget.dataset.id + '栏' + '第' + e.currentTarget.dataset.index + '个',
      icon: 'success',
      duration: 1500
    })
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {
    console.log(e.detail.current)
    this.setData({ currentTab: e.detail.current });
  },
})



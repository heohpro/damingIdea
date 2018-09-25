// miniprogram/pages/room/room.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 房间信息
    roomInfo: {
      roomTitle: '大明的房间'
    },
    roomHost: {
      avatarUrl: 'data:image/jpeg;base64,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',
      nickName: '大明'
    },
    // 用户列表
    userList: [{
      avatarUrl: 'http://img2.imgtn.bdimg.com/it/u=4001431513,4128677135&fm=26&gp=0.jpg',
      nickName: '多啦a梦'
    },{
      avatarUrl: 'data:image/jpeg;base64,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',
      nickName: '小勐海'
    },{
      avatarUrl: 'data:image/jpeg;base64,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',
      nickName: '邓超'
    },{
      avatarUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAbFBMVEX+/v7///8AAAA1NTXz8/P5+fnw8PD29va9vb3b29sQEBAJCQkYGBjm5ubr6+s6OjopKSlBQUHV1dXDw8MfHx98fHyenp5HR0ePj4+GhoYuLi5XV1dgYGBmZmampqaYmJhxcXFOTk6vr6/MzMyY7doZAAADwklEQVRoge2Z24KjKhBFLfAGomDEe7z//z8eTHpO93SbjjGI8+B+yEu0lkixoUrLOnXq1KlTp06dOnXq1KlTp07984KvMgn1wsnPirLsxoR4ZtgKEvppLigKmGTqV+Sp7+6OBnDHRiCZ95k/EUIuSZsOEvEy3BUNEBYYietInC9T7JAsD2QR7YZW2FIGPAu/JdTM9uMA+zuRwSsYwr61FF6xWxr0zg5kAF8g7j9cP+p11EEcaidD1FCRzTPrktBbRjsFrS56ybfh9vPcOiWWIk6n5UGPTC7+s5lrl7QaLVCDuqK6TAdULoZXzyelxhSbZ28gczxoUareszc9mkuYpBw1kQESzMpbvoITSwtuOfzw6kvF9JDVOpHiIxRErH8WEwinmQYyQEHFn4QBW+RPQqqXoYUM0AR59H8USNHv7xGgQ4Udq+R7jwzuNbjanzEgFL/OILh1oEwmGmj6DhngkqP0LxuEi0DZ48yyB5Sq54So/nbfa1xrFKz79uQQXsljsNOVd0+1G3TdultBlFKe/LgZrF/CqavBa2/7SE/jnzevwUIS02bJJ34PpmwT0QLmVShYYb9MBq+kLHsCWb7Tl1heZvJlCOIX/VMNt0I52TRHYPNKtjefs7oguL5wJFIWcEW03boegMTivjnCvJei7+n5GOuWkvZvnN3gMw9mv2XpuhnzMo6GTfn4Sf7iOH1Vz7m2QkPAx+UTxpZHICyOarnqWFLpPKZCJkQ6yXRNwG25/IBrNRWWXZ17K2JqPTJ5HGNccR7pjLoGbAs8K3aPAVe11ve4BuwM1Qx+el7ST26ZAovOPNhqJMYyMQ6eyxpeYf0V1QoyEHzdo4h8Tp7YOq/WDu6Q1jpuDfL+m2PD9gHe7bxJ2KotQiOXxBmxLatAvmFwwpGIB2Vdrx813yRHY5PHsViu4XclAzh2H2juiqxkR3Qw12P9CjaeWh/cUOJjXKunxwzYp/UhXMLF41p6N6oyy5yNprlqCV1KwVrTngXuWKONHYE3qDClDKF+MolV1LATCA2toS8zf7BO0jDEC2KSOtf/bU6DxrcNY8OCB7gki58sdsS6RRXkt+8zBrFzDxCjXF8jYTU3apBsHeMbL4QcNft/XPzJjTDb3BR7C1xS055859p8WNNb0Q+eVjbQtINbdEDdPYN7dkTdrcA8N12j3Lm27E03k+5gclTBnwSHrGILxqOSukCHlIMWpEetpkYesposGPghTm1BNRzSt7OA1geBUXOMcQEy3wW/gZ2jwC4y3DH8BJtvoH2ADxuxJvB/tmwr6hVR8RQAAAAASUVORK5CYII=',
      nickName: '小熊熊'
    },{
      avatarUrl: 'data:image/jpeg;base64,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',
      nickName: '容嬷嬷'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    if(!options.roomId) {
      wx.showToast({
        title: '错误的房间号，请稍后重试。',
        duration: 3000,
        icon: 'none'
      });
      setTimeout(()=>{
        wx.navigateBack();
      },3000)
    }
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
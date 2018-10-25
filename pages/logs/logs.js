//logs.js
const util = require('../../utils/util.js')
var flag = 0;
var touchStartFlag = 0
var classCatch = ['current', 'next', 'next', 'next', 'next', 'next'];
var touch = [0, 0];
Page({
  data: {
    testClass: classCatch,
    testCurrentNav: 0,
    // activeList: [{ ative: true, ative: false, ative: false, ative: false, ative: false, ative: false,}],
    testNav: [{
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
    }]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  touchStart(e) {
    // if (touchStartFlag == 0){
      // setTimeout(res => {
        touch[0] = e.touches[0].clientX
      //   touchStartFlag = 1
      // }, 50)
    // }

 
  },
  touchEnd(e) {
    // if (touchStartFlag == 1){
      touch[1] = e.changedTouches[0].clientX;
      if (touch[0] - touch[1] > this.data.testNav.length + 1) {
        this.swipNext();
      } else if (touch[1] - touch[0] > this.data.testNav.length + 1)       {
        this.swipPrev();
      }
      // touchStartFlag = 0 
    // }



  },
  swipNext(e) {
    flag++;
    if (flag < this.data.testNav.length) {
      for (var i = 0; i < this.data.testNav.length; i++) {
        if (i == flag) {
          classCatch[i] = 'current';
        } else if (i < flag) {
          classCatch[i] = 'prev';
        } else {
          classCatch[i] = 'next';
        }
      }
      this.setData({
        testClass: classCatch
      })
    } else {
      flag = this.data.testNav.length - 1;
    }
  },
  swipPrev(e) {
  
    flag--;
    if (flag + 1 > 0) {
      for (var i = 0; i < this.data.testNav.length; i++) {
        if (i == flag) {
          classCatch[i] = 'current';
        } else if (i < flag) {
          classCatch[i] = 'prev';
        } else {
          classCatch[i] = 'next';
        }
      }
      this.setData({
        testClass: classCatch
      })
    } else {
      flag = 0;
    }
  }

})

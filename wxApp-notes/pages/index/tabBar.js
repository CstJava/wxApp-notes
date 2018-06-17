  //只有在有tabBar的页面才有效
function setTabBarBadge(e) {
  wx.setTabBarBadge({
    index: 0,
    text: 'one',
    success: function (res) {
      console.log('添加成功')
    },
    fail: function (res) {
      console.log('添加失败')
    }
  })
};
function removeTabBarBadge(e) {
  wx.removeTabBarBadge({
    index: 0,
    text: 'one',
    success: function (res) {
      console.log('移除成功')
    },
    fail: function (res) {
      console.log('移除失败')
    }
  })
}
function showTabBarRedDot(e) {
  wx.showTabBarRedDot({
    index: 0
  })
}
function hideTabBarRedDot(e) {
  wx.hideTabBarRedDot({
    index: 0
  })
}
function setTabBarStyle(e) {
  wx.setTabBarStyle({
    color: 'blue',
    selectedColor: 'red',
    backgroundColor: '',
    borderStyle: '',
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {},
  })
}
function setTabBarItem(e) {
  wx.setTabBarItem({
    index: 0,
    text: 'test',
    iconPath: '',
    selectedIconPath: '',
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {},
  })
}
function showTabBar(e) {
  wx.showTabBar({
    aniamtion: true,
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {},
  })
}
function hideTabBar(e) {
  wx.hideTabBar({
    aniamtion: true,
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {},
  })
}


module.exports.setTabBarBadge = setTabBarBadge;
module.exports.removeTabBarBadge = removeTabBarBadge;
module.exports.showTabBarRedDot = showTabBarRedDot;
module.exports.hideTabBarRedDot = hideTabBarRedDot;
module.exports.setTabBarStyle = setTabBarStyle;
module.exports.setTabBarItem = setTabBarItem;
module.exports.showTabBar = showTabBar;
module.exports.hideTabBar = hideTabBar;
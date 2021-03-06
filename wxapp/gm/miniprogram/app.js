App({
  onLaunch: function () {
    wx.cloud.init({
      traceUser: true,

  })
  },
  //全局的列表查询方法
  getInfoByOrder(setName, ruleItem, orderFunc, callback) {
    const db = wx.cloud.database();
    db.collection(setName) // 边接数据表 mongodb 没有严格的字段 tmpPictures  json文档document mysql 关系型 mongodb 文档型
    .orderBy(ruleItem, orderFunc)
    .get() // promise 
    .then(callback) // 回到页面去  
    .catch(console.error) // 容错处理
  },
})
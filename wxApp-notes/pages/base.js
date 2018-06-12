function baseTest(){
  console.log("base.js test()")
}

//通过module.exports（建议）或exports方法对外暴露接口
module.exports.baseTest = baseTest;
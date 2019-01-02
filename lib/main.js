var readlineSync = require('readline-sync');
var question = require('cli-interact').question
var router = require('./router.js');
var state = {
  curSta: 'home',
  input: '',
  screen: undefined
};
const HOMEPROMPT = `1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`;
state.screen = HOMEPROMPT;
module.exports = () => {
  while (state.curSta !== 'exit') {
    state.input = question(state.screen);
    router(state);
  }
}
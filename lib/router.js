var addNewStudent = require('./add_new_student.js');
var printScoresheet = require('./print_scoresheet.js');
const HOMEPROMPT = `1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`;
module.exports = (state) => {
  switch (state.curSta) {
    case 'home':
      switch (state.input) {
        case '1':
          state.curSta = 'addStu';
          state.screen = `请输入学生信息（格式：姓名, 学号, 学科: 成绩, ...），按回车提交：`;
          break;
        case '2':
          state.curSta = 'prtScrsh';
          state.screen = `请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：`;
          break;
        case '3':
          state.curSta = 'exit';
          break;
        default:
          console.log('请输入正确信息');
          break;
      }
      break;
    case 'addStu':
      //console.log('goto add student');
      //invoke add student
      addNewStudent(state);
      break;
    case 'prtScrsh':
      //console.log('goto print scoresheet');
      //invoke print scoresheet
      printScoresheet(state);
      break;
  }
}
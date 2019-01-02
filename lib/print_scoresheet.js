const HOMEPROMPT = `1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`;
var {
  Student,
  klassobj
} = require('./students.js');
module.exports = (state) => {
  let idReg = /\b[0-9]{4}\b/
  let ids = state.input.split(', ');
  if (ids.every((cur) => idReg.test(cur))) {
    //查找id，生成成绩单
    let totalAvg = klassobj.totalAvg;
    let totalMed = klassobj.totalMed;
    let scoresheetData = klassobj.getScoresheet(ids);
    // console.log(scoresheetData);
    let scoresheetToPrint = scoresheetData.map((curStu) => {
      return `${curStu.name}|${curStu.math}|${curStu.chinese}|${curStu.english}|${curStu.programing}|${curStu.average}|${curStu.total}`
    }).join('\n');
    let scoresheet = `成绩单
姓名|数学|语文|英语|编程|平均分|总分
========================
${scoresheetToPrint}
========================
全班总分平均数：${klassobj.totalAvg}
全班总分中位数：${klassobj.totalMed}`;
    console.log(scoresheet);
    state.curSta = 'home';
    state.screen = HOMEPROMPT;
  } else {
    state.curSta = 'prtScrsh';
    state.screen = `请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：`;
    return null;
  }
}
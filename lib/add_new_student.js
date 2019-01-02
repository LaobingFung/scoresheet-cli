const HOMEPROMPT = `1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`;
var {
  Student,
  klassobj
} = require('./students.js');

function getContent(arr) {
  return arr[0].split(': ')[1];
}
module.exports = (state) => {
  let nameReg = /name: \w+/;
  let idReg = /id: \d+/;
  let mathReg = /math: [1-9][0-9]{0,2}/;
  let chineseReg = /chinese: [1-9][0-9]{0,2}/;
  let englishReg = /english: [1-9][0-9]{0,2}/;
  let programingReg = /programing: [1-9][0-9]{0,2}/;
  let name = state.input.match(nameReg);
  let id = state.input.match(idReg);
  let math = state.input.match(mathReg);
  let chinese = state.input.match(chineseReg);
  let english = state.input.match(englishReg);
  let programing = state.input.match(programingReg);
  // console.log(name, id, math, chinese, english, programing);
  if (name && id && math && chinese && english && programing) {
    let arr = [name, id, math, chinese, english, programing];
    let arrMap = arr.map((curarr) => getContent(curarr));
    let newStudent = new Student(arrMap[0], arrMap[1], parseInt(arrMap[2]), parseInt(arrMap[3]), parseInt(arrMap[4]), parseInt(arrMap[5]));
    klassobj.addStudent(newStudent);
    console.log(`学生${arrMap[0]}的成绩被添加`)
    state.curSta = 'home';
    state.screen = HOMEPROMPT;
  } else {
    state.curSta = 'addStu';
    state.screen = `请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：`;
  }
  //deal with state.input
  //match regexp
  //add student or print error prompt
}
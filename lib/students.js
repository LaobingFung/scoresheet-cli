class Student {
  constructor(name, id, math, chinese, english, programing) {
    this.name = name;
    this.id = id;
    this.math = math;
    this.chinese = chinese;
    this.english = english;
    this.programing = programing;
  }
  getTotal() {
    this.total = this.math + this.chinese + this.english + this.programing;
  }
  getAverage() {
    this.average = this.total / 4;
  }
}
class Klass {
  constructor() {
    this.students = [];
    this.totalAvg = 0;
    this.totalMed = 0;
  }
  addStudent(student) {
    student.getTotal();
    student.getAverage();
    this.students.push(student);
    this.totalAvg = this.getTotalavg();
    this.totalMed = this.getTotalMed();
  }
  getTotalavg() {
    let sum = this.students.reduce((acc, curStu) => {
      return acc += curStu.total;
    }, 0);
    return sum / this.students.length;
  }
  getTotalMed() {
    this.students.sort((a, b) => a.total - b.total);
    let medI = (this.students.length - 1) / 2;
    return (this.students[Math.floor(medI)].total + this.students[Math.ceil(medI)].total) / 2;
  }
  getScoresheet(ids) {
    return ids.map((curId) => {
      return this.students.find((curStu) => curStu.id === curId);
    }).filter((cur) => cur !== undefined);
  }
};
let klassobj = new Klass();
module.exports = {
  Student,
  klassobj
};
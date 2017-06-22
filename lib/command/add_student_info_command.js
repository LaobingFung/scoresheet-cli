let ScoreService = require('../service/score_service');

class AddStudentInfoCommand {
    invoke(input) {
        let HomeCommand = require("./home_command");
        this.next = new HomeCommand();
        new ScoreService().addStudentInfo(input);
        return '学生王大锤的成绩被添加' + '\r\n' + `1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`;
    }

    nextCommand() {
        return this.next;
    }
}

module.exports = AddStudentInfoCommand;
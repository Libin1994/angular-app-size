import { FormGroup, Validators, FormControl } from '@angular/forms';
var QuestionModel = (function () {
    function QuestionModel() {
        this.questions = [];
    }
    QuestionModel.prototype.toGroup = function () {
        var group = {};
        this.questions.forEach(function (question) {
            if (question.required) {
                group[question.key] = new FormControl('', Validators.required);
            }
            else {
                group[question.key] = new FormControl('');
            }
        });
        return new FormGroup(group);
    };
    return QuestionModel;
}());
export { QuestionModel };
//# sourceMappingURL=question-model.js.map
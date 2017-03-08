"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var question_model_1 = require("./question-model");
var textbox_question_1 = require("./textbox-question");
var dropdown_question_1 = require("./dropdown-question");
var SurveyDemo = (function () {
    function SurveyDemo() {
        this.questionModel = new question_model_1.QuestionModel();
    }
    SurveyDemo.prototype.ngOnInit = function () {
        var question = new textbox_question_1.TextboxQuestion();
        question.key = 'lastName';
        question.text = 'Last name';
        question.required = true;
        question.order = 2;
        this.questionModel.questions.push(question);
        question = new textbox_question_1.TextboxQuestion();
        question.key = 'firstName';
        question.text = 'First name';
        question.required = true;
        question.order = 1;
        this.questionModel.questions.push(question);
        question = new textbox_question_1.TextboxQuestion();
        question.key = 'emailAddress';
        question.text = 'Email';
        question.required = false;
        question.type = 'email';
        question.order = 3;
        this.questionModel.questions.push(question);
        var ddQuestion = new dropdown_question_1.DropDownQuestion();
        ddQuestion.key = 'country';
        ddQuestion.text = 'Country';
        ddQuestion.options.push({ key: 'usa', value: 'USA' });
        ddQuestion.options.push({ key: 'germany', value: 'Germany' });
        ddQuestion.options.push({ key: 'canada', value: 'Canada' });
        ddQuestion.options.push({ key: 'australia', value: 'Australia' });
        ddQuestion.order = 4;
        this.questionModel.questions.push(ddQuestion);
        this.questionModel.questions.sort(function (a, b) { return a.order - b.order; });
    };
    return SurveyDemo;
}());
SurveyDemo = __decorate([
    core_1.Component({
        selector: 'survey-demo',
        template: '<div><h1>Dynamic Form</h1><survey [model]="questionModel"></survey></div>'
    })
], SurveyDemo);
exports.SurveyDemo = SurveyDemo;
//# sourceMappingURL=survey-demo.js.map
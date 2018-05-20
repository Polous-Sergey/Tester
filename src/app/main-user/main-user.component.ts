import {Component, OnInit} from '@angular/core';
import {Section} from '../shared/model/section';
import {Router} from '@angular/router';
import {DataProviderService} from '../shared/services/data-provider.service';
import {Task} from '../shared/model/task';

@Component({
    selector: 'app-main-user',
    templateUrl: './main-user.component.html',
    styleUrls: ['./main-user.component.scss']
})
export class MainUserComponent implements OnInit {

    testsArr: Task[] = [];
    items: Section[] = [];
    workingOnTest = false;

    curentSection: Section;
    sectionCounter = 0;
    allUserAnswers = [];
    userAnswers = [];


    constructor(private router: Router,
                public data: DataProviderService) {
    }

    logout() {
        this.router.navigate(['/login']);
    }

    ngOnInit() {
        this.testsArr = this.data.getTests();
    }

    next() {
        console.log(this.userAnswers);

        if (this.sectionCounter < (this.items.length - 1)) {
            this.sectionCounter++;
            this.allUserAnswers.push(this.userAnswers);
            this.userAnswers = [];
            this.curentSection = this.items[this.sectionCounter];
            this.curentSection.questions.forEach((question, index) => {
                if (question.type === 'checkbox') {
                    this.userAnswers[index] = [];
                }
            });
        } else {
            this.allUserAnswers.push(this.userAnswers);
            this.workingOnTest = false;
            let questionCounter = 0;
            let oneQuestionPrice;
            let userBalPercent = 0;
            this.items.forEach((section, sectionIndex) => {
                questionCounter += section.questions.length;
            });
            oneQuestionPrice = 100 / questionCounter;

            this.items.forEach((section, sectionIndex) => {
                section.questions.forEach((question, questionIndex) => {
                    if (question.type === 'radio') {
                        if (typeof this.allUserAnswers[sectionIndex][questionIndex] !== 'undefined') {
                            if (question.answers[this.allUserAnswers[sectionIndex][questionIndex]].isTrue) {
                                userBalPercent += oneQuestionPrice;
                            }
                        }
                    } else if (question.type === 'checkbox') {
                        let totalBal = 0;
                        let counterRightAnswer = 0;
                        question.answers.forEach((answer) => {
                            if (answer.isTrue) {
                                counterRightAnswer++;
                            }
                        });
                        const oneCheck = oneQuestionPrice / counterRightAnswer;
                        question.answers.forEach((answer, answerIndex) => {
                            if (this.allUserAnswers[sectionIndex][questionIndex][answerIndex]) {
                                if (answer.isTrue) {
                                    totalBal += oneCheck;
                                } else {
                                    totalBal -= oneCheck;
                                }
                            } else {
                                if (answer.isTrue) {
                                    totalBal -= oneCheck;
                                }
                            }
                        });
                        if (totalBal > 0) {
                            userBalPercent += totalBal;
                        }
                    }
                });
            });

            console.log('result', userBalPercent);
            this.allUserAnswers = [];
        }
    }


    startTest(index: number) {
        this.sectionCounter = 0;
        this.items = this.testsArr[index].sections;
        this.curentSection = this.items[0];
        this.userAnswers = [];
        this.curentSection.questions.forEach((question, i) => {
            if (question.type === 'checkbox') {
                this.userAnswers[i] = [];
            }
        });
        this.workingOnTest = true;
    }


}

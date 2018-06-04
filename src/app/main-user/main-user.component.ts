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

    testsArr = [];
    lecturesArr = [];
    items = [];
    workingOnTest = false;
    workingOnLecture = false;
    currentLecture;
    testResults;
    testName;

    curentSection;
    sectionCounter = 0;
    allUserAnswers = [];
    userAnswers = [];


    constructor(private router: Router,
                public data: DataProviderService) {
    }

    startLecture(val) {
        this.currentLecture = val;
        this.workingOnLecture = true;
        console.log(val);
    }

    logout() {
        this.router.navigate(['/login']);
    }

    ngOnInit() {
        this.testsArr = this.data.getTests();
        this.lecturesArr = this.data.getLectures();
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
                    } else if (question.type === 'mapping') {
                        const oneCheck = oneQuestionPrice / question.answers[0].length;
                        question.answers[0].forEach((answer, answerIndex) => {
                            if (this.allUserAnswers[sectionIndex][questionIndex][answerIndex] === 'true') {
                                userBalPercent += oneCheck;
                            }
                        });
                    }
                });
            });

            console.log('result', userBalPercent);
            this.testResults = userBalPercent;
            this.data.finishTest(this.testName, userBalPercent);
            setTimeout(() => {
                console.log('result', userBalPercent);
                this.testResults = undefined;
            }, 5000);

            this.allUserAnswers = [];
        }
    }


    startTest(test) {
        this.workingOnLecture = false;
        this.sectionCounter = 0;
        this.testName = test.name;
        this.items = test.sections;
        this.curentSection = this.items[0];
        this.userAnswers = [];
        this.curentSection.questions.forEach((question, i) => {
            if (question.type === 'checkbox' || question.type === 'mapping') {
                this.userAnswers[i] = [];
            }
            if (question.type === 'mapping') {
                question.answers[1] = this.shuffle(question.answers[1]);
            }
        });
        this.workingOnTest = true;
    }


    shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

}

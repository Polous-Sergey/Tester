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
    userAnswers = [];


    constructor(private router: Router,
                public data: DataProviderService) {
    }

    logout() {
        this.router.navigate(['/login']);
    }

    ngOnInit() {
        // this.curentSection = this.items[0];
        this.testsArr = this.data.getTests();
        // if (this.items.length > 0) {
        //     this.curentSection.questions.forEach((question, index) => {
        //         if (question.type === 'checkbox') {
        //             this.userAnswers[index] = [];
        //         }
        //     });
        // }
    }

    next() {
        console.log(this.userAnswers);

        if (this.sectionCounter < (this.items.length - 1)) {
            this.sectionCounter++;
            this.curentSection = this.items[this.sectionCounter];
        } else {
            console.log('ended');
            this.workingOnTest = false;
        }

        this.curentSection.questions.forEach((question, index) => {
            if (question.type === 'checkbox') {
                this.userAnswers[index] = [];
            }
        });
    }


    startTest(test) {
        this.sectionCounter = 0;
        console.log(test);
        this.items = test.task;
        this.curentSection = this.items[0];
        this.curentSection.questions.forEach((question, index) => {
            if (question.type === 'checkbox') {
                this.userAnswers[index] = [];
            }
        });
        this.workingOnTest = true;
    }


}

import {Component, OnInit} from '@angular/core';
import {Section} from '../shared/model/section';

@Component({
    selector: 'app-main-user',
    templateUrl: './main-user.component.html',
    styleUrls: ['./main-user.component.scss']
})
export class MainUserComponent implements OnInit {
    items: Section[] = [
        {
            name: 'first',
            questions: [
                {
                    name: 'Simple test question texy for example',
                    type: 'radio',
                    answers: []
                },
                {
                    name: 'Simple test question texy for example',
                    type: 'radio',
                    answers: []
                },
                {
                    name: 'Simple test question texy for example',
                    type: 'radio',
                    answers: []
                }
            ],
        },
        {
            name: 'second',
            questions: [],
        },
        {
            name: 'last',
            questions: [],
        }
    ];

    curentSection: Section;
    userAnswers = [];

    constructor() {
    }

    ngOnInit() {
        this.curentSection = this.items[0];
    }

}

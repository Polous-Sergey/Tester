import {Component, OnInit} from '@angular/core';
import {Section} from '../../shared/model/section';
import {MatDialog} from '@angular/material';
import {AddSectionComponent} from '../../shared/modal/add-section/add-section.component';
import {AddQuestionComponent} from "../../shared/modal/add-question/add-question.component";
import {Question} from "../../shared/model/question";

@Component({
    selector: 'app-survey-list',
    templateUrl: './survey-list.component.html',
    styleUrls: ['./survey-list.component.scss']
})
export class SurveyListComponent implements OnInit {
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

    activeSection: Section = this.items[0];
    activeSectionIndex = 0;


    constructor(private dialog: MatDialog) {
    }

    ngOnInit() {
    }

    openAddSectionDialog(): void {
        const confiq: any = {
            width: '350px',
            data: {}
        };
        const dialogRef = this.dialog.open(AddSectionComponent, confiq);

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.items.push({
                    name: result,
                    questions: []
                });
            }
        });
    }

    openAddQuestionDialog(question?: Question, index?: number): void {
        const confiq: any = {
            width: '350px',
        };
        if (question) {
            confiq.data = question;
        }

        const dialogRef = this.dialog.open(AddQuestionComponent, confiq);

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                if (index || index === 0) {
                    this.items[this.activeSectionIndex].questions[index] = {
                        name: result.name,
                        type: result.type,
                        answers: []
                    };
                } else {
                    this.items[this.activeSectionIndex].questions.push({
                        name: result.name,
                        type: result.type,
                        answers: []
                    });
                }

            }
        });
    }

    setActiveSection(item: Section, index: number) {
        this.activeSection = item;
        this.activeSectionIndex = index;
    }

    addNewSection() {

    }

}

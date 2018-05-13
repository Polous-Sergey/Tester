import {Component, OnInit} from '@angular/core';
import {Section} from '../../shared/model/section';
import {MatDialog} from '@angular/material';
import {AddSectionComponent} from '../../shared/modal/add-section/add-section.component';
import {AddQuestionComponent} from '../../shared/modal/add-question/add-question.component';
import {Question} from '../../shared/model/question';
import {DataProviderService} from '../../shared/services/data-provider.service';

@Component({
    selector: 'app-survey-list',
    templateUrl: './survey-list.component.html',
    styleUrls: ['./survey-list.component.scss']
})
export class SurveyListComponent implements OnInit {
    questionaries;
    items;
    selectName;
    activeSection: Section;
    activeSectionIndex = 0;


    constructor(private dialog: MatDialog,
                public data: DataProviderService) {
    }

    selectTest(questions) {
        this.items = questions;
        this.activeSection = this.items[0];
    }

    ngOnInit() {
        this.questionaries = this.data.getTests();
        this.items = this.questionaries[0].sections;
        this.activeSection = this.items[0];
        this.selectName = this.questionaries[0].name;
    }

    addQuestionarie(name) {
        this.questionaries.push({
            name: name,
            sections: []
        });

        this.items = this.questionaries[(this.questionaries.length - 1)].sections;
        this.selectName = this.questionaries[(this.questionaries.length - 1)].name;
        this.activeSection = this.items[0];
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
            width: '1000px',
        };
        if (question) {
            confiq.data = question;
        }

        const dialogRef = this.dialog.open(AddQuestionComponent, confiq);

        dialogRef.afterClosed().subscribe(result => {
            console.log(result);
            if (result) {
                if (index || index === 0) {
                    this.items[this.activeSectionIndex].questions[index] = {
                        name: result.name,
                        type: result.type,
                        answers: result.answers
                    };
                } else {
                    this.items[this.activeSectionIndex].questions.push({
                        name: result.name,
                        type: result.type,
                        answers: result.answers
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

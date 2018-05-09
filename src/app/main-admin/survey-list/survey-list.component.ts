import {Component, OnInit} from '@angular/core';
import {Section} from '../../shared/model/section';
import {MatDialog} from '@angular/material';
import {AddSectionComponent} from '../../shared/modal/add-section/add-section.component';

@Component({
    selector: 'app-survey-list',
    templateUrl: './survey-list.component.html',
    styleUrls: ['./survey-list.component.scss']
})
export class SurveyListComponent implements OnInit {
    items: Section[] = [
        {
            name: 'first',
            questions: [],
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

    activeBlock = 1;


    constructor(
        private dialog: MatDialog
    ) {
    }

    ngOnInit() {
    }

    openAddSectionDialog(): void {
        const dialogRef = this.dialog.open(AddSectionComponent, {
            width: '350px',
            data: {name: '123'}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.items.push({
                    name: result,
                    questions: []
                });
            }
        });
    }

    setActiveSection(item: Section) {

    }

    addNewSection() {

    }

}

import {Component, OnInit} from '@angular/core';
import {DataProviderService} from '../../shared/services/data-provider.service';

@Component({
    selector: 'app-lectures-management',
    templateUrl: './lectures-management.component.html',
    styleUrls: ['./lectures-management.component.scss']
})
export class LecturesManagementComponent implements OnInit {
    lectures = [];
    selectedLecture;
    questionaries;
    selectedQuestionarie;

    constructor(public data: DataProviderService) {
    }

    ngOnInit() {
        this.lectures = this.data.getLectures();
        this.questionaries = this.data.getTests();
        this.selectedLecture = this.lectures[0];

    }

    addQuestionarie(val) {
        console.log(val);
    }


}

import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';


@Component({
    selector: 'app-add-question',
    templateUrl: './add-question.component.html',
    styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {
    name = '';
    type = '';
    answers = [];


    constructor(private dialogRef: MatDialogRef<AddQuestionComponent>,
                @Inject(MAT_DIALOG_DATA) private data: any) {

    }

    ngOnInit() {
        if (this.data) {
            this.name = this.data.name;
            this.type = this.data.type;
            this.answers = this.data.answers;
        }
    }

    submitClick() {
        if (this.name !== '' && this.type !== '') {
            this.dialogRef.close({name: this.name, type: this.type, answers: this.answers});
        }
    }

    closeClick(): void {
        this.dialogRef.close();
    }

    addAnswer() {
this.answers.push({
    name: '',
    isTrue: false
});
    }


}

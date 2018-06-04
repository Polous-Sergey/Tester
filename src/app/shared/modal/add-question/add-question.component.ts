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


    addMap() {
        this.answers[0].push({
            name: ''
        });
        this.answers[1].push({
            name: '',
            trueIndex: this.answers[0].length
        });
        console.log(this.answers[1]);
    }

    delete (index) {
        if (this.type === 'mapping') {
            this.answers[0].splice(index, 1);
            this.answers[1].splice(index, 1);
        } else {
            this.answers.splice(index, 1);
        }

    }


}

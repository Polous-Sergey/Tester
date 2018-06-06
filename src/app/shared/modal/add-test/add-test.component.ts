import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-add-test',
    templateUrl: './add-test.component.html',
    styleUrls: ['./add-test.component.scss']
})
export class AddTestComponent implements OnInit {
    name = '';

    constructor(
        private dialogRef: MatDialogRef<AddTestComponent>,
        @Inject(MAT_DIALOG_DATA) private data: any
    ) {
    }

    ngOnInit() {
    }

    submitClick() {
        this.dialogRef.close(this.name);
    }

    closeClick(): void {
        this.dialogRef.close();
    }

}


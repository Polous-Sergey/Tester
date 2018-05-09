import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-add-section',
    templateUrl: './add-section.component.html',
    styleUrls: ['./add-section.component.scss']
})
export class AddSectionComponent implements OnInit {
    name: string;

    constructor(
        private dialogRef: MatDialogRef<AddSectionComponent>,
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

import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    number = 0;
    nextNumber = 0;

    runP: any;
    runM: any;

    percent: number;
    couter: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
    ) {
    }

    ngOnInit() {
    }

    login () {
        // this.stop();
        // setTimeout(() => {
        //     this.nextNumber = number;
        //     if (this.number < this.nextNumber) {
        //         this.percent = (this.nextNumber - this.number) / 100;
        //         this.couter = 15;
        //         this.changerP();
        //     } else if (this.number > this.nextNumber) {
        //         this.percent = (this.nextNumber - this.number) / 100;
        //         this.couter = 15;
        //         this.changerM();
        //     }
        // }, 50);

        this.router.navigate(['/admin/user']);
    }

    pluser() {
        if (this.number < this.nextNumber) {
            this.number = this.number + this.percent * this.couter--;
            this.changerP();
        } else {
            this.number = +this.nextNumber;
        }
    }

    minuser() {
        if (this.number > this.nextNumber) {
            this.number = this.number + this.percent * this.couter--;
            this.changerM();
        } else {
            this.number = +this.nextNumber;
        }
    }

    changerP() {
        this.runP = setTimeout(() => this.pluser(), 76);
    }

    changerM() {
        this.runM = setTimeout(() => this.minuser(), 76);
    }

    stop() {
        clearTimeout(this.runP);
        clearTimeout(this.runP);
    }

}

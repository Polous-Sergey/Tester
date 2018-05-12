import {Component, OnInit} from '@angular/core';
import {User} from '../shared/model/user';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    user = {
        name: '',
        surname: '',
        email: '',
    };

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    login() {
        if (this.user.name !== '' && this.user.surname !== '' && this.user.email !== '') {
            this.router.navigate(['/admin/user']);
        }
    }


}

import {Component, OnInit} from '@angular/core';
import {User} from '../shared/model/user';
import {Router} from '@angular/router';
import {DataProviderService} from '../shared/services/data-provider.service';

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
        role: 1,
        password: '',
        tests: [],
        id: new Date().getTime()
    };
    type = 'Login';
    error = null;

    constructor(private router: Router,
                private data: DataProviderService) {
    }

    ngOnInit() {
        this.data.getAll();
    }

    login() {
        if (this.user.name.trim() !== '' && this.user.password.trim() !== '') {
            this.error = this.data.checkCreds(this.user);
            if (this.error === 'ok') {
                if (this.data.curentUser.role === 1) {
                    this.router.navigate(['/user']);
                } else this.router.navigate(['/admin/user']);
            }

        } else this.error = 'One of the fields empty';
    }

    register() {
        if (this.user.name.trim() !== '' &&
            this.user.password.trim() !== '' &&
            this.user.surname.trim() !== '' && this.user.email.trim() !== '') {
            this.data.users.push(this.user);
            this.data.curentUser = this.user;
            this.router.navigate(['/user']);
        } else this.error = 'One of the fields empty';
    }


}

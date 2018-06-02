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
        password: '',
        tests: [],
        id: new Date().getTime()
    };
    type = 'login';
    error = null;

    constructor(private router: Router,
                private data: DataProviderService) {
    }

    ngOnInit() {
    }

    login() {
        if (this.user.name !== '') {
            if (this.user.name === 'admin' && this.user.surname === 'admin') {
                this.router.navigate(['/admin/user']);
            } else {
                if (this.type === 'login') {
                    this.error = this.data.checkCreds(this.user);
                    if (this.error === 'ok') this.router.navigate(['/user']);
                } else {
                    this.data.users.push(this.user);
                    this.data.curentUser = this.user;
                    this.router.navigate(['/user']);
                }
            }

        }
    }


}

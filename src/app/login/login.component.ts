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
        tests: []
    };

    constructor(private router: Router,
                private data: DataProviderService) {
    }

    ngOnInit() {
    }

    login() {
        if (this.user.name !== '' && this.user.surname !== '' && this.user.email !== '') {
            if (this.user.name === 'admin' && this.user.surname === 'admin') {
                this.router.navigate(['/admin/user']);
            } else {
                this.data.users.push(this.user) ;
                this.router.navigate(['/user']);
            }

        }
    }


}

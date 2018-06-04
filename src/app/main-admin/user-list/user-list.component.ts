import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {User} from '../../shared/model/user';
import {DataProviderService} from '../../shared/services/data-provider.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
    displayedColumns = ['name', 'surname', 'email', 'progress', 'assessment', 'actions'];
    dataSource: MatTableDataSource<User>;
    users = [];
    adminCreation;
    error;

    user = {
        name: '',
        password: '',
        id: new Date().getTime(),
        role: 2,
        surname: '',
        email: '',
        tests: []
    };

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public data: DataProviderService) {
    }

    ngOnInit() {
        this.users = this.data.getUsers();
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;


    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }

    createAdmin() {
        this.adminCreation = true;
    }

    create() {
        if (this.user.name.trim() !== '' && this.user.password.trim() !== '') {
            this.data.users.push(this.user);
            this.adminCreation = false;
        } else this.error = "Fill all fields"

    }
}
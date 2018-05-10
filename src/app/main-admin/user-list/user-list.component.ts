import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {User} from '../../shared/model/user';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
    displayedColumns = ['name', 'surname', 'email', 'progress', 'assessment', 'actions'];
    dataSource: MatTableDataSource<User>;
    users: User[] = [
        {
            name: 'name',
            surname: 'surname',
            email: 'email',
            progress: false,
            assessment: 5
        },
        {
            name: 'name2',
            surname: 'surname2',
            email: 'email2',
            progress: true,
            assessment: 4
        }
    ];

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor() {
        this.dataSource = new MatTableDataSource(this.users);
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }

}
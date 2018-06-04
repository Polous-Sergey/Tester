import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataProviderService} from '../shared/services/data-provider.service';

@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.scss']
})
export class MainAdminComponent implements OnInit {

  constructor(private router: Router,
              private data: DataProviderService) { }

  ngOnInit() {
  }
    logout() {
        this.data.saveAll();
        this.router.navigate(['/login']);
    }
}

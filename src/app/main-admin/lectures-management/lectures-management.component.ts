import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lectures-management',
  templateUrl: './lectures-management.component.html',
  styleUrls: ['./lectures-management.component.scss']
})
export class LecturesManagementComponent implements OnInit {
lectures = [
    {
      name: 'lecture 1',
        data: null
    },
    {
      name: 'lecture 2',
        data: null
    },
    {
      name: 'lecture 3',
        data: null
    },
]
  constructor() { }

  ngOnInit() {
  }

    addQuestionarie (val){
  console.log(val)
    }


}

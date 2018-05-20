import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturesManagementComponent } from './lectures-management.component';

describe('LecturesManagementComponent', () => {
  let component: LecturesManagementComponent;
  let fixture: ComponentFixture<LecturesManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturesManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

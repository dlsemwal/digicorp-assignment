import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLeaveComponent } from './add-edit-leave.component';

describe('AddEditLeaveComponent', () => {
  let component: AddEditLeaveComponent;
  let fixture: ComponentFixture<AddEditLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditLeaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

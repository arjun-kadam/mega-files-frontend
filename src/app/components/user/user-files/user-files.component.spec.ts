import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFilesComponent } from './user-files.component';

describe('UserFilesComponent', () => {
  let component: UserFilesComponent;
  let fixture: ComponentFixture<UserFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserFilesComponent]
    });
    fixture = TestBed.createComponent(UserFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

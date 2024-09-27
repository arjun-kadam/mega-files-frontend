import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalFilesComponent } from './global-files.component';

describe('GlobalFilesComponent', () => {
  let component: GlobalFilesComponent;
  let fixture: ComponentFixture<GlobalFilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalFilesComponent]
    });
    fixture = TestBed.createComponent(GlobalFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

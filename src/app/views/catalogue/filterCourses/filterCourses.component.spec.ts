import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCoursesComponent } from './filterCourses.component';

describe('FilterCoursesComponent', () => {
  let component: FilterCoursesComponent;
  let fixture: ComponentFixture<FilterCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

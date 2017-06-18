import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentbookaccomodationComponent } from './studentbookaccomodation.component';

describe('StudentbookaccomodationComponent', () => {
  let component: StudentbookaccomodationComponent;
  let fixture: ComponentFixture<StudentbookaccomodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentbookaccomodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentbookaccomodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

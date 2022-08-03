import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonInfoFormComponent } from './person-info-form.component';

describe('PersonInfoFormComponent', () => {
  let component: PersonInfoFormComponent;
  let fixture: ComponentFixture<PersonInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonInfoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

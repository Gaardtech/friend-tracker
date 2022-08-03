import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFriendPageComponent } from './edit-friend-page.component';

describe('EditFriendPageComponent', () => {
  let component: EditFriendPageComponent;
  let fixture: ComponentFixture<EditFriendPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFriendPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFriendPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

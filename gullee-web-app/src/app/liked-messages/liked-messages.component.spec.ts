import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedMessagesComponent } from './liked-messages.component';

describe('LikedMessagesComponent', () => {
  let component: LikedMessagesComponent;
  let fixture: ComponentFixture<LikedMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

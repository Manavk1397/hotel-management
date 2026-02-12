import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomcardComponent } from './roomcard.component';

describe('RoomcardComponent', () => {
  let component: RoomcardComponent;
  let fixture: ComponentFixture<RoomcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoomcardComponent]
    });
    fixture = TestBed.createComponent(RoomcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

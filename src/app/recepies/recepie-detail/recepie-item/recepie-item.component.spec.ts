import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieItemComponent } from './recepie-item.component';

describe('RecepieItemComponent', () => {
  let component: RecepieItemComponent;
  let fixture: ComponentFixture<RecepieItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecepieItemComponent]
    });
    fixture = TestBed.createComponent(RecepieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

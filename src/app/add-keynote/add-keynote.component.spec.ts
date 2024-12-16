import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKeynoteComponent } from './add-keynote.component';

describe('AddKeynoteComponent', () => {
  let component: AddKeynoteComponent;
  let fixture: ComponentFixture<AddKeynoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddKeynoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddKeynoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

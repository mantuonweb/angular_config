import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaExpendedComponent } from './textarea-expended.component';

describe('TextareaExpendedComponent', () => {
  let component: TextareaExpendedComponent;
  let fixture: ComponentFixture<TextareaExpendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextareaExpendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareaExpendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

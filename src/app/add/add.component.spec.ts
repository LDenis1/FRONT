import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ADDComponent } from './add.component';

describe('ADDComponent', () => {
  let component: ADDComponent;
  let fixture: ComponentFixture<ADDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ADDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

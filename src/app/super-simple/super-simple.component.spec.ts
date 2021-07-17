import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSimpleComponent } from './super-simple.component';

describe('SuperSimpleComponent', () => {
  let component: SuperSimpleComponent;
  let fixture: ComponentFixture<SuperSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

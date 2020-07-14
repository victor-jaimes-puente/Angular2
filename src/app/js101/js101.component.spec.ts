import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Js101Component } from './js101.component';

describe('Js101Component', () => {
  let component: Js101Component;
  let fixture: ComponentFixture<Js101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Js101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Js101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

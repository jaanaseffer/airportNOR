/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AirportListComponent } from './airport-list.component';

describe('AirportListComponent', () => {
  let component: AirportListComponent;
  let fixture: ComponentFixture<AirportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

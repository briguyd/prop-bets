/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PropSheetComponent } from './prop-sheet.component';

describe('PropSheetComponent', () => {
  let component: PropSheetComponent;
  let fixture: ComponentFixture<PropSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

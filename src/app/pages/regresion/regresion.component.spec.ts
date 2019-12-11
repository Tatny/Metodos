import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegresionComponent } from './regresion.component';

describe('RegresionComponent', () => {
  let component: RegresionComponent;
  let fixture: ComponentFixture<RegresionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegresionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegresionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsAndMapsComponent } from './charts-and-maps.component';

describe('ChartsAndMapsComponent', () => {
  let component: ChartsAndMapsComponent;
  let fixture: ComponentFixture<ChartsAndMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsAndMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsAndMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

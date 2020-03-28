import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsDataComponent } from './animals-data.component';

describe('AnimalsDataComponent', () => {
  let component: AnimalsDataComponent;
  let fixture: ComponentFixture<AnimalsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

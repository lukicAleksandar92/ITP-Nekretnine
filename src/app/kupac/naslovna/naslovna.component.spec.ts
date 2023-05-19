import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaslovnaComponent } from './naslovna.component';

describe('NaslovnaComponent', () => {
  let component: NaslovnaComponent;
  let fixture: ComponentFixture<NaslovnaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaslovnaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaslovnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

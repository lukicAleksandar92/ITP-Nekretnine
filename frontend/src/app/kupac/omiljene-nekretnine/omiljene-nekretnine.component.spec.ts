import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmiljeneNekretnineComponent } from './omiljene-nekretnine.component';

describe('OmiljeneNekretnineComponent', () => {
  let component: OmiljeneNekretnineComponent;
  let fixture: ComponentFixture<OmiljeneNekretnineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmiljeneNekretnineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmiljeneNekretnineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

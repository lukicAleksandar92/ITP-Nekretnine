import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezultatPretrageComponent } from './rezultat-pretrage.component';

describe('RezultatPretrageComponent', () => {
  let component: RezultatPretrageComponent;
  let fixture: ComponentFixture<RezultatPretrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezultatPretrageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RezultatPretrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

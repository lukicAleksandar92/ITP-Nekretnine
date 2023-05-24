import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StranicaOglasaComponent } from './stranica-oglasa.component';

describe('StranicaOglasaComponent', () => {
  let component: StranicaOglasaComponent;
  let fixture: ComponentFixture<StranicaOglasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StranicaOglasaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StranicaOglasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

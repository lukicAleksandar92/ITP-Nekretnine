import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgMojProfilComponent } from './og-moj-profil.component';

describe('OgMojProfilComponent', () => {
  let component: OgMojProfilComponent;
  let fixture: ComponentFixture<OgMojProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OgMojProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OgMojProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

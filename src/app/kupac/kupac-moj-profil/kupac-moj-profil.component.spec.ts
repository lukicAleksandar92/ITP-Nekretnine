import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupacMojProfilComponent } from './kupac-moj-profil.component';

describe('KupacMojProfilComponent', () => {
  let component: KupacMojProfilComponent;
  let fixture: ComponentFixture<KupacMojProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupacMojProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KupacMojProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

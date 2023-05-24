import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KupacHeaderComponent } from './kupac-header.component';

describe('KupacHeaderComponent', () => {
  let component: KupacHeaderComponent;
  let fixture: ComponentFixture<KupacHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KupacHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KupacHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

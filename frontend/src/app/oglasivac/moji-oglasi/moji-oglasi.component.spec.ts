import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojiOglasiComponent } from './moji-oglasi.component';

describe('MojiOglasiComponent', () => {
  let component: MojiOglasiComponent;
  let fixture: ComponentFixture<MojiOglasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MojiOglasiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MojiOglasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgHeaderComponent } from './og-header.component';

describe('OgHeaderComponent', () => {
  let component: OgHeaderComponent;
  let fixture: ComponentFixture<OgHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OgHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OgHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

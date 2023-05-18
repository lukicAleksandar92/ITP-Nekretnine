import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgFooterComponent } from './og-footer.component';

describe('OgFooterComponent', () => {
  let component: OgFooterComponent;
  let fixture: ComponentFixture<OgFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OgFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OgFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

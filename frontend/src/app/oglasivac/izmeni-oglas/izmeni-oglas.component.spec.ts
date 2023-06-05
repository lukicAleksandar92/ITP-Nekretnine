import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzmeniOglasComponent } from './izmeni-oglas.component';

describe('IzmeniOglasComponent', () => {
  let component: IzmeniOglasComponent;
  let fixture: ComponentFixture<IzmeniOglasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IzmeniOglasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IzmeniOglasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

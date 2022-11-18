import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavegacionLoginComponent } from './barra-navegacion-login.component';

describe('BarraNavegacionLoginComponent', () => {
  let component: BarraNavegacionLoginComponent;
  let fixture: ComponentFixture<BarraNavegacionLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraNavegacionLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraNavegacionLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificarVentaComponent } from './planificar-venta-component';

describe('PlanificarVentaComponent', () => {
  let component: PlanificarVentaComponent;
  let fixture: ComponentFixture<PlanificarVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanificarVentaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanificarVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

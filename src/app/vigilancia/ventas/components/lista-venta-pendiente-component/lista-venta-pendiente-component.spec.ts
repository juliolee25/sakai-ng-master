import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVentaPendienteComponent } from './lista-venta-pendiente-component';

describe('ListaVentaPendienteComponent', () => {
  let component: ListaVentaPendienteComponent;
  let fixture: ComponentFixture<ListaVentaPendienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaVentaPendienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaVentaPendienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

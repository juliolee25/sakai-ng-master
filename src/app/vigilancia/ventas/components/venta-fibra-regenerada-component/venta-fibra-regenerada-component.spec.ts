import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaFibraRegeneradaComponent } from './venta-fibra-regenerada-component';

describe('VentaFibraRegeneradaComponent', () => {
  let component: VentaFibraRegeneradaComponent;
  let fixture: ComponentFixture<VentaFibraRegeneradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentaFibraRegeneradaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaFibraRegeneradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

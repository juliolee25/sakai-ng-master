import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarProveedorComponent } from './administrar-proveedor-component';

describe('AdministrarProveedorComponent', () => {
  let component: AdministrarProveedorComponent;
  let fixture: ComponentFixture<AdministrarProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrarProveedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrarProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

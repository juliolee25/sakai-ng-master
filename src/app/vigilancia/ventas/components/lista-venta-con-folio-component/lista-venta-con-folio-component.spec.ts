import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVentaConFolioComponent } from './lista-venta-con-folio-component';

describe('ListaVentaConFolioComponent', () => {
  let component: ListaVentaConFolioComponent;
  let fixture: ComponentFixture<ListaVentaConFolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaVentaConFolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaVentaConFolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

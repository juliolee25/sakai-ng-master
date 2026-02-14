import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVentaSinFolioComponent } from './lista-venta-sin-folio-component';

describe('ListaVentaSinFolioComponent', () => {
  let component: ListaVentaSinFolioComponent;
  let fixture: ComponentFixture<ListaVentaSinFolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaVentaSinFolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaVentaSinFolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

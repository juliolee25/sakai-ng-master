import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaSinFolioComponent } from './venta-sin-folio-component';

describe('VentaSinFolioComponent', () => {
  let component: VentaSinFolioComponent;
  let fixture: ComponentFixture<VentaSinFolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentaSinFolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaSinFolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

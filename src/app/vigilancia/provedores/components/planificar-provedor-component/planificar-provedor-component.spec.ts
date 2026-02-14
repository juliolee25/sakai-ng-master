import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificarProvedorComponent } from './planificar-provedor-component';

describe('PlanificarProvedorComponent', () => {
  let component: PlanificarProvedorComponent;
  let fixture: ComponentFixture<PlanificarProvedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanificarProvedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanificarProvedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

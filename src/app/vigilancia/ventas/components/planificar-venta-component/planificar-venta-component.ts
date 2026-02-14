import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-planificar-venta-component',
  imports: [DatePickerModule, FormsModule,SelectModule,ButtonModule],
  templateUrl: './planificar-venta-component.html',
  styleUrl: './planificar-venta-component.scss'
})
export class PlanificarVentaComponent { 

  date: Date = new Date;
  clientes: any = [];
  selectedCliente: any;

  
}

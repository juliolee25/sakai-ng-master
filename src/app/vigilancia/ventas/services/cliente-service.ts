import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
    getClientesDataPromise() {
        return [
            {
                id: 1,
                nombre: 'Laminsa',               
                telefono: '967277053',                
                contacto: 'Alain Arnet',
            },
            {
                id: 4,
                nombre: 'Blancos Pileso',                
                telefono: '968522865',
                contacto: 'Karel gonzalez',
            },
            {
                id: 2,
                nombre: 'Texnotej',                
                telefono: '57004522',
                contacto: 'Angel Guevara',
            },
            {
                id: 3,
                nombre: 'Pilzar',                
                telefono: '21323',
                contacto: 'Alex Concepcion',
            },            
        ]
    }

    getClientes() {
        return Promise.resolve(this.getClientesDataPromise());
    }
}

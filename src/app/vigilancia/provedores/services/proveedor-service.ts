import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {
  getProveedoresDataPromise() {
        return [
            {
                id: 1,
                nombre: 'Avante',      
                nombre_facturacion: 'Silvano Perez',        
                telefono: '967277053',                
                cuenta_bancaria: 3788223322222,
                correo_electronico: 'asd@fujitsu.com',
            },
            {
                id: 2,
                nombre: 'Raul Marquez',      
                nombre_facturacion: 'Raul Perez',        
                telefono: '883399222',                
                cuenta_bancaria: 3788223322222,
                correo_electronico: 'asd@fujitsu.com',
            },
            {
                id: 3,
                nombre: 'Blancos Pileso',      
                nombre_facturacion: 'Oscar Perez',        
                telefono: '967277053',                
                cuenta_bancaria: 3788223322222,
                correo_electronico: 'asd@fujitsu.com',
            },  
            {
                id: 4,
                nombre: 'Saul Arriaga',      
                nombre_facturacion: 'Saul Perez',        
                telefono: '967277053',                
                cuenta_bancaria: 3788223322222,
                correo_electronico: 'asd@fujitsu.com',
            },          
        ]
    }

    getProveedoress() {
        return Promise.resolve(this.getProveedoresDataPromise());
    }
}

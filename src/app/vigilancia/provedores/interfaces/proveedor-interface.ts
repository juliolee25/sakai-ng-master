import { Injectable } from "@angular/core";

export interface ProveedorInterface {
    id?: number;
    nombre?: string;
    nombre_facturacion?: string;      
    telefono?: string;  
    cuenta_bancaria?: number;  
    correo_electronico?: string;
}
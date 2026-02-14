import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                label: 'Incio',
                items: [{ label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/'] }]
            },
            {
                label: 'Vigilancia',
                items: [
                    {
                        label: 'Ventas',
                        icon: 'pi pi-fw pi-cart-plus',
                        items: [
                                { label: 'Crear Cliente', icon: 'pi pi-fw pi-users', routerLink: ['/vigilancia/crear-cliente'] },
                                { label: 'Planificar Venta', icon: 'pi pi-fw pi-calendar-clock', routerLink: ['/vigilancia/planificar-venta'] },
                                { label: 'Venta de fibra', icon: 'pi pi-fw pi-barcode', routerLink: ['/vigilancia/venta-fibra-regenerada'] },                                
                                { label: 'Venta sin Folio', icon: 'pi pi-fw pi-dollar', routerLink: ['/vigilancia/venta-sin-folio'] },
                                { label: 'Lista Ventas Pendientes', icon: 'pi pi-fw pi-list', routerLink: ['/vigilancia/lista-venta-pendiente'] },
                                { label: 'Lista Ventas con Folios', icon: 'pi pi-fw pi-list', routerLink: ['/vigilancia/lista-venta-con-folio'] },
                                { label: 'Lista Ventas Sin Folios', icon: 'pi pi-fw pi-list', routerLink: ['/vigilancia/lista-venta-sin-folio'] },
                                { label: 'Lista de Clientes', icon: 'pi pi-fw pi-list', routerLink: ['/vigilancia/lista-clientes'] },
                            ]
                    }, 
                    {
                        label: 'Provedores',
                        icon: 'pi pi-fw pi-truck',
                        items: [
                            { label: 'Planificar proveedor', icon: 'pi pi-fw pi-calendar-clock', routerLink: ['/landing'] },
                            { label: 'Entrada de Material', icon: 'pi pi-fw pi-truck', routerLink: ['/landing'] },                                                     
                            { label: 'Lista de Provedores', icon: 'pi pi-fw pi-list', routerLink: ['/landing'] },
                        ]
                    }, 
                    {
                        label: 'Estadisticas',
                        icon: 'pi pi-fw pi-chart-bar',
                        items: []
                    }                                  
                   
                   
                ]
            },
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                routerLink: ['/pages'],
                items: [
                    {
                        label: 'Landing',
                        icon: 'pi pi-fw pi-globe',
                        routerLink: ['/landing']
                    },
                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },
                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud']
                    },
                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/pages/notfound']
                    },
                    {
                        label: 'Empty',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/pages/empty']
                    }
                ]
            },
            {
                label: 'Hierarchy',
                items: [
                    {
                        label: 'Submenu 1',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 1.1',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                            {
                                label: 'Submenu 1.2',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
                            }
                        ]
                    },
                    {
                        label: 'Submenu 2',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {
                                label: 'Submenu 2.1',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [
                                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
                                ]
                            },
                            {
                                label: 'Submenu 2.2',
                                icon: 'pi pi-fw pi-bookmark',
                                items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Get Started',
                items: [
                    {
                        label: 'Documentation',
                        icon: 'pi pi-fw pi-book',
                        routerLink: ['/documentation']
                    },
                    {
                        label: 'View Source',
                        icon: 'pi pi-fw pi-github',
                        url: 'https://github.com/primefaces/sakai-ng',
                        target: '_blank'
                    }
                ]
            }
        ];
    }
}

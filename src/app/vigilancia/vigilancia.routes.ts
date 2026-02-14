import { Routes } from "@angular/router";
import { PlanificarVentaComponent } from "./ventas/components/planificar-venta-component/planificar-venta-component";
import { VentaFibraRegeneradaComponent } from "./ventas/components/venta-fibra-regenerada-component/venta-fibra-regenerada-component";
import { VentaSinFolioComponent } from "./ventas/components/venta-sin-folio-component/venta-sin-folio-component";
import { ListaVentaPendienteComponent } from "./ventas/components/lista-venta-pendiente-component/lista-venta-pendiente-component";
import { ListaVentaConFolioComponent } from "./ventas/components/lista-venta-con-folio-component/lista-venta-con-folio-component";
import { ListaVentaSinFolioComponent } from "./ventas/components/lista-venta-sin-folio-component/lista-venta-sin-folio-component";
import { ListaClienteComponent } from "./ventas/components/lista-cliente-component/lista-cliente-component";
import { CrearClienteComponent } from "./ventas/components/crear-cliente-component/crear-cliente-component";



export default [
    { path: 'crear-cliente', data: { breadcrumb: 'Planificar Venta' }, component: CrearClienteComponent },
    { path: 'planificar-venta', data: { breadcrumb: 'Planificar Venta' }, component: PlanificarVentaComponent },
    { path: 'venta-fibra-regenerada', data: { breadcrumb: 'Venta de Fibra Regenerada' }, component: VentaFibraRegeneradaComponent },
    { path: 'venta-sin-folio', data: { breadcrumb: 'Venta sin Folio' }, component: VentaSinFolioComponent },
    { path: 'lista-venta-pendiente', data: { breadcrumb: 'Lista de Ventas pendiente' }, component: ListaVentaPendienteComponent },
    { path: 'lista-venta-con-folio', data: { breadcrumb: 'Lista de Venta con folio' }, component: ListaVentaConFolioComponent },
    { path: 'lista-venta-sin-folio', data: { breadcrumb: 'Lista de Venta sin folio' }, component: ListaVentaSinFolioComponent },
    { path: 'lista-clientes', data: { breadcrumb: 'Lista de Clientes' }, component: ListaClienteComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;

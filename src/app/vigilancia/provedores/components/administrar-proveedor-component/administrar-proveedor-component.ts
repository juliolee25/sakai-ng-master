import { ProveedorInterface } from '@/vigilancia/provedores/interfaces/proveedor-interface';
import { ProveedorService } from '@/vigilancia/provedores/services/proveedor-service';
import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SelectModule } from 'primeng/select';
import { Table, TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { TextareaModule } from 'primeng/textarea';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';


interface Column {
    field: string;
    header: string;
    customExportHeader?: string;
}

interface ExportColumn {
    title: string;
    dataKey: string;
}

@Component({
    selector: 'app-administrar-proveedor-component',
    imports: [
        CommonModule,
        TableModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        TextareaModule,
        SelectModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        TagModule,
        InputIconModule,
        IconFieldModule,
        ConfirmDialogModule
    ],
    providers: [MessageService, ConfirmationService],
    templateUrl: './administrar-proveedor-component.html',
    styleUrl: './administrar-proveedor-component.scss'
})
export class AdministrarProveedorComponent implements OnInit {
    proveedorDialog: boolean = false;

    selectedProveedors!: ProveedorInterface[] | null;

    proveedors = signal<ProveedorInterface[]>([]);

    cols!: Column[];

    exportColumns!: ExportColumn[];

    proveedor!: ProveedorInterface;

    submitted: boolean = false;

    constructor(
        private proveedorService: ProveedorService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {}
    ngOnInit(): void {
        this.loadDemoData();
    }

    loadDemoData() {
        this.proveedorService.getProveedoress().then((data) => {
            this.proveedors.set(data);
        });

        this.cols = [
            { field: 'nombre', header: 'Nombre', customExportHeader: 'Product Code' },
            { field: 'nombre_facturacion', header: 'Nombre Facturacion' },
            { field: 'telefono', header: 'Telefono' },
            { field: 'cuenta_bancaria', header: 'Cuenta Bancaria' },
            { field: 'correo_electronico', header: 'Correo Electronico' }
        ];

        this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
    }

    onGlobalFilter(_t29: Table<ProveedorInterface>, $event: Event) {
        throw new Error('Method not implemented.');
    }
    deleteSelectedProducts() {
        this.confirmationService.confirm({
            message: '¿Esta seguro que desea eliminar los provedores seleccionados? ',
            header: 'Confirmar',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.proveedors.set(this.proveedors().filter((val) => !this.selectedProveedors?.includes(val)));
                this.selectedProveedors = null;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Provedores Eliminados',
                    life: 3000
                });
            }
        });
    }
    openNew() {
        this.proveedor = {};
        this.submitted = false;
        this.proveedorDialog = true;
    }
    deleteClient(proveedor: ProveedorInterface) {
        console.log(proveedor);
        this.confirmationService.confirm({
            message: 'Esta seguro que desea eliminar el cliente ' + proveedor.nombre + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.proveedors.set(this.proveedors().filter((val) => val.id !== proveedor.id));
                this.proveedor = {};
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Provedor Eliminado',
                    life: 3000
                });
            }
        });
    }
    editClient(proveedor: ProveedorInterface) {
        this.proveedor = { ...proveedor };
        this.proveedorDialog = true;
    }

    saveClient() {
        this.submitted = true;
        let _products = this.proveedors();
        if (this.proveedor.nombre?.trim() && this.proveedor.nombre_facturacion?.trim()) {
            if (this.proveedor.id) {
                _products[this.findIndexById(this.proveedor.id)] = this.proveedor;
                this.proveedors.set([..._products]);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Provedor Actualizado',
                    life: 3000
                });
            } else {
                this.proveedor.id = this.createId();
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Provedor creado',
                    life: 3000
                });
                this.proveedors.set([..._products, this.proveedor]);
            }

            this.proveedorDialog = false;
            this.proveedor = {};
        }
    }
    createId(): number {
        let id = 42;
        return id;
    }
    findIndexById(id: number) {
        let index = -1;
        for (let i = 0; i < this.proveedors().length; i++) {
            if (this.proveedors()[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }
    hideDialog() {
        this.proveedorDialog = false;
        this.submitted = false;
    }
}

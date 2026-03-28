import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Product, ProductService } from '@/pages/service/product.service';
import { CommonModule } from '@angular/common';
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ClienteInterface } from '../../interfaces/cliente-interface';
import { ClienteService } from '../../services/cliente-service';

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
    selector: 'app-crear-cliente-component',
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
    templateUrl: './crear-cliente-component.html',
    styleUrl: './crear-cliente-component.scss',
    standalone: true
})
export class CrearClienteComponent implements OnInit {
    clientDialog: boolean = false;

    selectedClients!: ClienteInterface[] | null;

    clients = signal<ClienteInterface[]>([]);

    cols!: Column[];

    exportColumns!: ExportColumn[];

    client!: ClienteInterface;

    submitted: boolean = false;

    constructor(
        private clientService: ClienteService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {}
    ngOnInit(): void {
        this.loadDemoData();
    }

    loadDemoData() {
        this.clientService.getClientes().then((data) => {
            this.clients.set(data);
        });

        this.cols = [
            { field: 'nombre', header: 'Nombre', customExportHeader: 'Product Code' },
            { field: 'telefono', header: 'Telefono' },
            { field: 'contacto', header: 'Contacto' }
        ];

        this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
    }

    onGlobalFilter(_t29: Table<ClienteInterface>, $event: Event) {
        throw new Error('Method not implemented.');
    }
    deleteSelectedProducts() {
        this.confirmationService.confirm({
            message: '¿Esta seguro que desea eliminar los provedores seleccionados? ' ,
            header: 'Confirmar',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.clients.set(this.clients().filter((val) => !this.selectedClients?.includes(val)));
                this.selectedClients = null;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Clientes Eliminados',
                    life: 3000
                });
            }
        });
    }
    openNew() {
        this.client = {};
        this.submitted = false;
        this.clientDialog = true;
    }
    deleteClient(client: ClienteInterface) {
        console.log(client);
       this.confirmationService.confirm({
            message: 'Esta seguro que desea eliminar el cliente ' + client.nombre + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.clients.set(this.clients().filter((val) => val.id !== client.id));
                this.client = {};
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Cliente Eliminado',
                    life: 3000
                });
            }
        });
    }
    editClient(client: ClienteInterface) {
         this.client = { ...client };
        this.clientDialog = true;
    }

    saveClient() {
        this.submitted = true;
        let _products = this.clients();
        if ((this.client.nombre?.trim()) && this.client.telefono?.trim() && this.client.contacto?.trim()) {
            if (this.client.id) {
                _products[this.findIndexById(this.client.id)] = this.client;
                this.clients.set([..._products]);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Cliente Actualizado',
                    life: 3000
                });
            } else {
                this.client.id = this.createId();                
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Cliente creado',
                    life: 3000
                });
                this.clients.set([..._products, this.client]);
            }

            this.clientDialog = false;
            this.client = {};
        }
    }
    createId(): number {
        let id = 42
        return id;
    }
    findIndexById(id: number) {
        let index = -1;
        for (let i = 0; i < this.clients().length; i++) {
            if (this.clients()[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }
    hideDialog() {
        this.clientDialog = false;
        this.submitted = false;
    }
}

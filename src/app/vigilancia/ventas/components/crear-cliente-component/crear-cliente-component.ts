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
    providers: [MessageService, ProductService, ConfirmationService],
    templateUrl: './crear-cliente-component.html',
    styleUrl: './crear-cliente-component.scss',
    standalone: true
})
export class CrearClienteComponent implements OnInit {
    clients = signal<ClienteInterface[]>([]);

    client!: ClienteInterface;

    selectedClients!: ClienteInterface[] | null;

    submitted: boolean = false;

    statuses!: any[];

    @ViewChild('dt') dt!: Table;

    exportColumns!: ExportColumn[];

    cols!: Column[];

    clientDialog: boolean = false;

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

        this.statuses = [
            { label: 'INSTOCK', value: 'instock' },
            { label: 'LOWSTOCK', value: 'lowstock' },
            { label: 'OUTOFSTOCK', value: 'outofstock' }
        ];

        this.cols = [
            { field: 'code', header: 'Code', customExportHeader: 'Product Code' },
            { field: 'name', header: 'Name' },
            { field: 'image', header: 'Image' },
            { field: 'price', header: 'Price' },
            { field: 'category', header: 'Category' }
        ];

        this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
    }

    openNew() {
        this.client = {};
        this.submitted = false;
        this.clientDialog = true;
    }

    saveProduct() {
        throw new Error('Method not implemented.');
    }
    hideDialog() {
        this.clientDialog = false;
        this.submitted = false;
    }

    

    deleteSelectedClients() {
        throw new Error('Method not implemented.');
    }

    onGlobalFilter(_t29: Table<ClienteInterface>, $event: Event) {
        throw new Error('Method not implemented.');
    }

    getSeverity(arg0: any): string | null | undefined {
        throw new Error('Method not implemented.');
    }
    deleteProduct(_t61: any) {
        throw new Error('Method not implemented.');
    }
    editProduct(_t61: any) {
        throw new Error('Method not implemented.');
    }
}

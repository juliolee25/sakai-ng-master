import { PRIMENG_ES } from '@/i18n/primeng-es';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimeNG } from 'primeng/config';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterModule],
    template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {   

    private primengConfig = inject(PrimeNG);

    ngOnInit(): void {
        this.primengConfig.setTranslation(PRIMENG_ES);
    }
}

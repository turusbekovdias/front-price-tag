import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {CompanyService} from "./service/company.service";
import {StoreService} from "./service/store.service";
import {StationService} from "./service/station.service";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    menuMode = 'static';

    constructor(private primengConfig: PrimeNGConfig,
                private companyService: CompanyService,
                private storeService: StoreService,
                private stationService: StationService) { }

    ngOnInit() {
        this.companyService.getCompanies().pipe().subscribe();
        this.storeService.getStores().pipe().subscribe();
        this.stationService.getStations().pipe().subscribe();

        this.primengConfig.ripple = true;
        document.documentElement.style.fontSize = '14px';
    }
}

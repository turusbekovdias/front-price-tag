import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Customer, Representative} from "../../api/customer";
import {Product} from "../../api/product";
import {Table} from "primeng/table";
import {BaseStation} from "../../api/base-station";
import {StationService} from "../../service/station.service";
import {map} from "rxjs/operators";
import {Company} from "../../api/company";
import {Store} from "../../api/store";
import {CompanyService} from "../../service/company.service";
import {StoreService} from "../../service/store.service";

@Component({
  selector: 'app-base-station',
  templateUrl: './base-station.component.html',
  styleUrls: ['./base-station.component.scss']
})
export class BaseStationComponent implements OnInit {

  companies: Company[];

  company1: Company = {};

  stores: Store[];

  store1: Store = {};

  stations: BaseStation[];

  editStation: BaseStation = {};

  loading:boolean = true;

  deleteProductsDialog:boolean = false;

  productDialog:boolean = false;

  submitted:boolean = true;

  @ViewChild('dt') table: Table;

  @ViewChild('filter') filter: ElementRef;

  constructor(private stationService: StationService,
              private companyService: CompanyService,
              private storeService: StoreService) { }

  ngOnInit(): void {
    this.loading = false;
    this.loadStations();
    this.companies = this.companyService.loadAllCompanies();
    this.stores = this.storeService.getAllStores();
  }

  saveProduct() {
    console.log(1);
    this.stationService.addStation(this.editStation)
      .pipe(map(res => {
          this.loadStations();
      }))
      .subscribe();
  }

  confirmDeleteSelected() {
    this.stationService.deleteStation(this.editStation.id).pipe(map(value => {
      console.log(value);
    })).subscribe();
  }
  editProduct(customer: Customer) {
    this.editStation = {...customer}
    this.productDialog = true;
  }

  deleteProduct(product: Customer) {
    this.deleteProductsDialog = true;
  }

  loadStations() {
    this.stationService.getStations().pipe(map(value => {
      this.stations = value;
    }))
      .subscribe();
  }

  newCustomer() {
    console.log(this.companies);
    console.log(this.stores);
    this.editStation = {};
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

}

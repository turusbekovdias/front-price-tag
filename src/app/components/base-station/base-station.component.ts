import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Customer, Representative} from "../../api/customer";
import {Product} from "../../api/product";
import {Table} from "primeng/table";
import {BaseStation} from "../../api/base-station";

@Component({
  selector: 'app-base-station',
  templateUrl: './base-station.component.html',
  styleUrls: ['./base-station.component.scss']
})
export class BaseStationComponent implements OnInit {


  customer:Customer = {};

  customers1: Customer[];

  customers2: Customer[];

  customers3: Customer[];

  baseStations: BaseStation[];

  selectedCustomers1: Customer[];

  selectedCustomer: Customer;

  representatives: Representative[];

  statuses: any[];

  products: Product[];

  rowGroupMetadata: any;

  expandedRows = {};

  activityValues: number[] = [0, 100];

  isExpanded: boolean = false;

  idFrozen: boolean = false;

  loading:boolean = true;

  deleteProductsDialog:boolean = false;

  productDialog:boolean = false;

  submitted:boolean = true;

  @ViewChild('dt') table: Table;

  @ViewChild('filter') filter: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.loading = false;
    this.baseStations = [
      {stationId: "312546876", ipAddress: '192.168.0.153', registrationDate: '2022-08-08', status: 'active'},
      {stationId: "234978567", ipAddress: '192.168.0.253', registrationDate: '2022-08-08', status: 'active'},
      {stationId: "684539739", ipAddress: '192.168.0.10', registrationDate: '2022-08-08', status: 'active'},
      {stationId: "210374592", ipAddress: '192.168.0.15', registrationDate: '2022-08-08', status: 'active'},
      {stationId: "547089612", ipAddress: '192.168.0.53', registrationDate: '2022-08-08', status: 'active'},
      {stationId: "824357234", ipAddress: '192.168.0.13', registrationDate: '2022-08-08', status: 'active'},
    ]
  }


  confirmDeleteSelected() {

  }
  editProduct(customer: Customer) {
    this.customer = {...customer}
    this.productDialog = true;
  }

  deleteProduct(product: Customer) {
    this.deleteProductsDialog = true;
  }

  loadCompanies() {
  }

  newCustomer() {
    this.customer = {};
    this.productDialog = true;
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

}

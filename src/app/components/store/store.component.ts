import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Customer, Representative} from "../../api/customer";
import {Table} from "primeng/table";
import {Product} from "../../api/product";
import {Store} from "../../api/store";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {


  customer:Customer = {};

  customers1: Customer[];

  customers2: Customer[];

  customers3: Customer[];

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

  stores: Store[];

  @ViewChild('dt') table: Table;

  @ViewChild('filter') filter: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.loading = false;
    this.stores = [
      {country: 'Kazakhstan', city: 'Almaty', storeAddress: "Tole bi 2a", registrationDate: '2022-08-08', storeStatus: 'active'},
      {country: 'Kazakhstan', city: 'Astana', storeAddress: "kvartal 2a",registrationDate: '2022-08-08', storeStatus: 'close'},
      {country: 'Kazakhstan', city: 'Shymkent', storeAddress: "Abay 2a",registrationDate: '2022-08-08', storeStatus: ''},
      {country: 'Kazakhstan', city: 'Taraz', storeAddress: "Kazibek bi 2a",registrationDate: '2022-08-08'},
      {country: 'Kazakhstan', city: 'Taldykorgan', storeAddress: "Alfarab bi 2a",registrationDate: '2022-08-08'},
      {country: 'Kazakhstan', city: 'Bishkek', storeAddress: "Momishuly 2a",registrationDate: '2022-08-08'},
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

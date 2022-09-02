import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Customer, Representative} from "../../api/customer";
import {Table} from "primeng/table";
import {Product} from "../../api/product";
import {PriceTag} from "../../api/price-tag";

@Component({
  selector: 'app-price-tag',
  templateUrl: './price-tag.component.html',
  styleUrls: ['./price-tag.component.scss']
})
export class PriceTagComponent implements OnInit {


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

  priceTags: PriceTag[];

  @ViewChild('dt') table: Table;

  @ViewChild('filter') filter: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.loading = false;
    this.priceTags = [
      {baseStationId: 'asd234',  tagId: 'AFA5345344', storeId: 'asd123'},
      {baseStationId: 'asd234',  tagId: 'AFA5345344', storeId: 'asd123'},
      {baseStationId: 'asd234',  tagId: 'AFA5345344', storeId: 'asd123'},
      {baseStationId: 'asd234',  tagId: 'AFA5345344', storeId: 'asd123'},
      {baseStationId: 'asd234',  tagId: 'AFA5345344', storeId: 'asd123'},
      {baseStationId: 'asd234',  tagId: 'AFA5345344', storeId: 'asd123'},
      {baseStationId: 'asd234',  tagId: 'AFA5345344', storeId: 'asd123'},
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

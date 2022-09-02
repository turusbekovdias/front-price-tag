import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Customer, Representative} from "../../api/customer";
import {Product} from "../../api/product";
import {Table} from "primeng/table";
import {ProductItem} from "../../api/product-item";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  customer:Customer = {};

  customers1: Customer[];

  customers2: Customer[];

  customers3: Customer[];

  selectedCustomers1: Customer[];

  selectedCustomer: Customer;

  representatives: Representative[];

  statuses: any[];

  products: ProductItem[];

  importProducts: ProductItem[];

  product2: ProductItem = {};

  rowGroupMetadata: any;

  expandedRows = {};

  activityValues: number[] = [0, 100];

  isExpanded: boolean = false;

  idFrozen: boolean = false;

  loading:boolean = true;

  deleteProductsDialog:boolean = false;

  productDialog:boolean = false;

  importDialog:boolean = false;

  submitted:boolean = true;

  uploadedFiles: any[] = [];

  @ViewChild('dt') table: Table;

  @ViewChild('filter') filter: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.loading = false;
    this.products = [
      {id: "1", barcode: '1112223330', quantity: 1, unit: '1л', name: 'Coca-cola', price: 320, oldPrice: 220, registrationDate: '2022-08-08', inventoryStatus: 'active', madeCountry: 'Kazakhstan'},
      {id: "2", barcode: '1112223331', quantity: 1, unit: '1л', name: 'Pepsi', price: 320, oldPrice: 220, registrationDate: '2022-08-08', inventoryStatus: 'close', madeCountry: 'Kazakhstan'},
      {id: "3", barcode: '1112223332', quantity: 1, unit: '2л', name: 'Sunday', price: 320, oldPrice: 220, registrationDate: '2022-08-08', inventoryStatus: 'new', madeCountry: 'Kazakhstan'},
      {id: "4", barcode: '1112223333', quantity: 1, unit: '2л', name: 'Lipton', price: 420, oldPrice: 320, registrationDate: '2022-08-08', inventoryStatus: 'old', madeCountry: 'Kazakhstan'},
      {id: "5", barcode: '1112223334', quantity: 1, unit: '1л', name: '7up', price: 320, oldPrice: 220, registrationDate: '2022-08-08', inventoryStatus: 'fun', madeCountry: 'Kazakhstan'},
      {id: "6", barcode: '1112223335', quantity: 1, unit: '0,5л', name: 'Gorilla', price: 480, oldPrice: 380, registrationDate: '2022-08-08',inventoryStatus: "strong", madeCountry: 'Kazakhstan'},
    ];
    this.importProducts = [
      {itemStatus: 'NEW', tagId: null, id: "1", barcode: '1112223330', quantity: 1, unit: '1л', name: 'Coca-cola', price: 320, oldPrice: 220, registrationDate: '2022-08-08', inventoryStatus: 'active', madeCountry: 'Kazakhstan'},
      {itemStatus: 'CHANGE', tagId: '345135', id: "2", barcode: '1112223331', quantity: 1, unit: '1л', name: 'Pepsi', price: 320, oldPrice: 220, registrationDate: '2022-08-08', inventoryStatus: 'close', madeCountry: 'Kazakhstan'},
      {itemStatus: 'CHANGE', tagId: '435574', id: "3", barcode: '1112223332', quantity: 1, unit: '2л', name: 'Sunday', price: 320, oldPrice: 220, registrationDate: '2022-08-08', inventoryStatus: 'new', madeCountry: 'Kazakhstan'},
      {itemStatus: 'SAME', tagId: '986535', id: "4", barcode: '1112223333', quantity: 1, unit: '2л', name: 'Lipton', price: 420, oldPrice: 320, registrationDate: '2022-08-08', inventoryStatus: 'old', madeCountry: 'Kazakhstan'},
      {itemStatus: 'NEW', tagId: null, id: "5", barcode: '1112223334', quantity: 1, unit: '1л', name: '7up', price: 320, oldPrice: 220, registrationDate: '2022-08-08', inventoryStatus: 'fun', madeCountry: 'Kazakhstan'},
      {itemStatus: 'SAME', tagId: '643782', id: "6", barcode: '1112223335', quantity: 1, unit: '0,5л', name: 'Gorilla', price: 480, oldPrice: 380, registrationDate: '2022-08-08',inventoryStatus: "strong", madeCountry: 'Kazakhstan'},
    ]
  }

  loadFile(event) {
    this.importDialog = true;
    for (const file of event.files) {
      console.log(file);
      this.uploadedFiles.push(file);
    }
  }

  confirmDeleteSelected() {

  }

  editProduct(product: ProductItem) {
    this.product2 = {...product}
    this.productDialog = true;
  }

  deleteProduct(product: Customer) {
    this.deleteProductsDialog = true;
  }

  deleteImportProduct(id: number) {
    console.log(id);
    this.importProducts.splice(id, 1);
  }

  loadCompanies() {
  }

  newCustomer() {
    this.product2 = {};
    this.productDialog = true;
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

}

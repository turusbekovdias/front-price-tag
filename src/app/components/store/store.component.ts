import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Customer, Representative} from "../../api/customer";
import {Table} from "primeng/table";
import {Product} from "../../api/product";
import {Store} from "../../api/store";
import {StoreService} from "../../service/store.service";
import {map} from "rxjs/operators";
import {CompanyService} from "../../service/company.service";
import {Company} from "../../api/company";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  loading:boolean = true;

  deleteProductsDialog:boolean = false;

  productDialog:boolean = false;

  submitted:boolean = true;

  companies: Company[];

  stores: Store[];

  editStore:Store = {};

  @ViewChild('dt') table: Table;

  @ViewChild('filter') filter: ElementRef;

  constructor(private storeService: StoreService, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.loading = false;
    this.loadStores();
    this.companies = this.companyService.loadAllCompanies();
  }


  confirmDeleteSelected() {
    this.storeService.deleteStore(this.editStore.id).pipe(map(value => {
      console.log(value);
    })).subscribe();
  }

  editProduct(store: Store) {
    this.editStore = {...store}
    this.productDialog = true;
  }

  deleteProduct(product: Customer) {
    this.deleteProductsDialog = true;
  }

  loadStores() {
    this.storeService.getStores().pipe(map(value => {
      this.stores = value;
    }))
      .subscribe();
  }

  newStore() {
    this.editStore = {};
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
  }

  saveProduct() {
    this.storeService.addStore(this.editStore)
      .pipe(map(value => {
        console.log(value);
      }))
      .subscribe();
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

}

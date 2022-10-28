import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Customer, Representative} from "../../api/customer";
import {Product} from "../../api/product";
import {Table} from "primeng/table";
import {ProductItem} from "../../api/product-item";
import {ItemService} from "../../service/item.service";
import {map} from "rxjs/operators";
import {ProductImportService} from "../../service/product.import.service";
import {ZkongService} from "../../service/zkong.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: ProductItem[];

  importProducts: ProductItem[];

  product2: ProductItem = {};

  loading:boolean = true;

  deleteProductsDialog:boolean = false;

  productDialog:boolean = false;

  importDialog:boolean = false;

  submitted:boolean = true;

  uploadedFiles: any[] = [];

  @ViewChild('dt') table: Table;

  @ViewChild('filter') filter: ElementRef;

  constructor(private itemService: ItemService,
              private productImportService: ProductImportService,
              private zkongService: ZkongService) { }

  ngOnInit(): void {
    this.loading = false;
    this.loadItems();
    this.importProducts = [];
  }

  onSelectEvent(event) {
    console.log("Selected files", event);
  }

  loadFile(event) {
    for (const file of event.files) {
     this.productImportService.addItem(file)
       .pipe(map(res => {
         this.importProducts = res;
         this.importDialog = true;
       }))
       .subscribe();
    }
  }

  saveImportItem() {
    this.productImportService.saveNew(this.importProducts)
      .pipe(map(res => {
        this.loadItems();
      }))
      .subscribe();
  }

  confirmDeleteSelected() {
    this.deleteProductsDialog = false;
    console.log(this.product2.id);
    this.itemService.deleteItem(this.product2.id)
      .pipe(map(res => {
        this.loadItems();
      }))
      .subscribe();
  }

  saveList() {
    this.importDialog = false;
    this.productImportService.saveNew(this.importProducts)
      .pipe(map( value => {
        this.loadItems();
      }))
      .subscribe();
  }

  editProduct(product: ProductItem) {
    this.product2 = {...product}
    this.productDialog = true;
  }

  deleteProduct(product: ProductItem) {
    console.log(product.id);
    this.product2 = {...product}
    this.deleteProductsDialog = true;
  }

  deleteImportProduct(id: number) {
    console.log(id);
    this.importProducts.splice(id, 1);
  }

  loadAll() {
    this.products = this.itemService.takeAllItems();
  }

  loadItems() {
    this.itemService.getItems()
      .pipe(map(res => {
        this.loadAll();
      })).subscribe();
  }

  newCustomer() {
    this.product2 = {};
    this.productDialog = true;
  }

  hideDialog() {
    this.productDialog = false;
  }

  saveProduct() {

    console.log(this.product2.barCode);

    this.itemService.addItem(this.product2)
      .pipe(map (res => {
        this.loadItems();
        this.productDialog = false;
      }))
      .subscribe();
  }

  productIntegration() {
    this.zkongService.importItems()
      .pipe(map(res => {
        this.loadItems();
      }))
      .subscribe();
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

}

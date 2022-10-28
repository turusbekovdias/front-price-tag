import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Customer, Representative} from "../../api/customer";
import {Table} from "primeng/table";
import {Product} from "../../api/product";
import {PriceTag} from "../../api/price-tag";
import {TagService} from "../../service/tag.service";
import {map} from "rxjs/operators";
import {BaseStation} from "../../api/base-station";
import {CompanyService} from "../../service/company.service";
import {StoreService} from "../../service/store.service";
import {StationService} from "../../service/station.service";
import {Company} from "../../api/company";
import {Store} from "../../api/store";
import {ZkongService} from "../../service/zkong.service";
import {ProductItem} from "../../api/product-item";
import {ProductService} from "../../service/productservice";
import {ItemService} from "../../service/item.service";

@Component({
  selector: 'app-price-tag',
  templateUrl: './price-tag.component.html',
  styleUrls: ['./price-tag.component.scss']
})
export class PriceTagComponent implements OnInit {

  products: ProductItem[];

  stations: BaseStation[];

  station1: BaseStation;

  companies: Company[];

  company1: Company;

  stores: Store[];

  store1: Store;

  loading:boolean = true;

  deleteProductsDialog:boolean = false;

  productDialog:boolean = false;

  submitted:boolean = true;

  tags: PriceTag[];

  editTag: PriceTag = {};

  @ViewChild('dt') table: Table;

  @ViewChild('filter') filter: ElementRef;

  constructor(private tagService: TagService,
              private companyService: CompanyService,
              private zkongService: ZkongService,
              private productService: ItemService,
              private storeService: StoreService,
              private stationService: StationService) { }

  ngOnInit(): void {
    this.loading = false;
    this.loadTags();

    this.stations = this.stationService.getAllStations();
    this.companies = this.companyService.loadAllCompanies();
    this.stores = this.storeService.getAllStores();
    this.productService.getItems()
      .pipe(map(res =>{
        this.products = res
       }))
      .subscribe();

  }


  confirmDeleteSelected() {

  }
  editProduct(tag: PriceTag) {
    this.editTag = {...tag}
    this.productDialog = true;
  }

  deleteProduct(product: Customer) {
    this.deleteProductsDialog = true;
  }

  loadTags() {
    this.tagService.getTags()
      .pipe(map(env => {
        this.tags = env;
      }))
      .subscribe();
  }

  newCustomer() {
    this.editTag = {};
    this.productDialog = true;
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

  hideDialog() {
    this.productDialog = false;
  }

  bindTagsWithItems() {
    this.zkongService.bindTagsWithItems()
      .pipe(map(res => {
        this.loadTags();
      }))
      .subscribe();
  }

  saveProduct() {
    this.productDialog = false;
    console.log(this.editTag.baseStation?.ipAddress);
    this.tagService.addTag(this.editTag)
      .pipe(map(value => {
        this.loadTags();
      }))
      .subscribe();
  }

}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Customer, Representative} from "../../api/customer";
import {Product} from "../../api/product";
import {Table} from "primeng/table";
import {Company} from "../../api/company";
import {CompanyService} from "../../service/company.service";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companyEdit:Company = {};

  company1: Company[];

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

  deleteCompaniesDialog:boolean = false;

  companyDialog:boolean = false;

  submitted:boolean = true;

  @ViewChild('dt') table: Table;

  @ViewChild('filter') filter: ElementRef;

  constructor(public companyService: CompanyService) { }

  ngOnInit(): void {
    this.loading = false;
    this.company1 = [
      {name: 'Alabs Team', country: 'Kazakhstan', date: '2022-08-08', status: 'active'},
      {name: 'Khan', country: 'Russia', date: '2022-08-08', status: 'close'},
      {name: 'Tumar', country: 'USA', date: '2022-08-08', status: 'active'},
      {name: 'Elba', country: 'UK', date: '2022-08-08', status: 'active'},
      {name: 'Magnum', country: 'French', date: '2022-08-08', status: 'active'},
      {name: 'Sulpak', country: 'Italy', date: '2022-08-08', status: 'active'},
    ]
  }


  confirmDeleteSelected() {

  }
  editCompany(company: Company) {
    this.companyEdit = {...company}
    this.companyDialog = true;
  }

  deleteCompany(comnpany: Company) {
    this.deleteCompaniesDialog = true;
   }

  loadCompanies() {
  }

  newCompany() {
    this.companyEdit = {};
    this.companyDialog = true;
  }

  hideDialog() {
    this.companyDialog = false;
  }

  saveCompany() {
    this.companyService.addCompany(this.companyEdit).pipe(map(value => {
      console.log("test");
    }))
      .subscribe();
    console.log("stranno");
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

}

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

  loading:boolean = true;

  deleteCompaniesDialog:boolean = false;

  companyDialog:boolean = false;

  submitted:boolean = true;

  @ViewChild('dt') table: Table;

  @ViewChild('filter') filter: ElementRef;

  constructor(public companyService: CompanyService) { }

  ngOnInit(): void {
    this.loading = false;
    this.loadCompanies();
  }


  confirmDeleteSelected() {
    this.loading = true;
    this.companyService.deleteCompany(this.companyEdit.id).pipe(map(value => {
      this.loading = false;
    }))
      .subscribe();
  }

  loadCompanies() {
    this.loading = true;
    this.companyService.getCompanies().pipe(map(value => {
      this.company1 = value;
      console.log("test");
      this.loading = false;
    }))
      .subscribe();
  }

  editCompany(company: Company) {
    this.companyEdit = {...company}
    this.companyDialog = true;
  }

  deleteCompany(comnpany: Company) {
    this.companyEdit = comnpany;
    this.deleteCompaniesDialog = true;
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
      this.loadCompanies();
    }))
      .subscribe();
    this.companyDialog = false;
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

}
